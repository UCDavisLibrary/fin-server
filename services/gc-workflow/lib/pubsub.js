const config = require('./config');
const EventEmitter = require('events');
const fs = require('fs');
const {logger} = require('@ucd-lib/fin-node-utils');
const {PubSub} = require('@google-cloud/pubsub');
const {URL} = require('url');

let HOSTNAME = new URL(config.server.url).hostname.replace(/\./g, '');

class FinGCWorflowPubSub extends EventEmitter {

  constructor() {
    super();

    this.onMessage = this.onMessage.bind(this);
    this.subscriptions = [];
  }

  async init() {
    let opts = {};
    if( fs.existsSync('/etc/fin/webapp-service-account.json') ) {
      opts.projectId = require('/etc/fin/webapp-service-account.json').project_id,
      opts.keyFilename = '/etc/fin/webapp-service-account.json'
    }

    this.pubsub = new PubSub(opts);
    await this.initTopics();
  }

  async initTopics() {
    let currentTopics = (await this.pubsub.getTopics({autoPaginate: false}))[0];

    for( let topicName of config.gcWorkflow.topics ) {
      topicName = 'fin-workflow-'+topicName;
      let topicId = `projects/${this.pubsub.projectId}/topics/${topicName}`;

      let topicInst = currentTopics.find(topic => topic.name === topicId);
      if( !topicInst ) {
        await this.pubsub.createTopic(topicName);
      }

      await this.initSubscription(topicName);
    }

  }

  async initSubscription(topicName) {
    let subId = `projects/${this.pubsub.projectId}/subscriptions/${HOSTNAME}_${topicName}`;

    let subs = (await this.pubsub.topic(topicName).getSubscriptions({autoPaginate: false}))[0];
    let subscription = subs.find(subscription => subscription.name === subId);
    if( !subscription ) {
      let resp = await this.pubsub
        .topic(topicName)
        .createSubscription(`${HOSTNAME}_${topicName}`);
      subscription = resp[0];
    }

    this.subscriptions.push(subscription);
  }

  listen() {  
    logger.info('Listening to the following subscriptions: ', this.subscriptions.map(sub => sub.name));
    this.subscriptions.forEach(sub => sub.on(`message`, this.onMessage));
  }

  unlisten() {
    this.subscriptions.forEach(sub => sub.removeListener('message', this.onMessage));
  }

  async onMessage(msg) {
    let data = JSON.parse(msg.data.toString('utf-8'));
    this.emit('message', data);
    msg.ack();
  }

}

module.exports = new FinGCWorflowPubSub();