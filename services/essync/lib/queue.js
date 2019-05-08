const {logger} = require('@ucd-lib/fin-node-utils');

class JobQueue {

  constructor() {
    this.MAX_QUEUE_SIZE = 5;
    this.processing = 0;
    this.queue = [];
  }

  add(id, data) {
    let index = this.queue.findIndex(job => job.id === id);
    if( index > -1 ) {
      this.queue[index] = {id, data};
    } else {
      this.queue.push({data, id});
    }

    this.processQueue();
  }

  async processQueue() {
    if( this.queue.length === 0 ) return;
    if( this.processing > this.MAX_QUEUE_SIZE ) return;
    
    this.processing++;

    let job = this.queue.shift();
    try {
      await this.process(job.data);
    } catch(e) {
      logger.error('failed to process essync message in queue: ', e);
    }

    this.processing--;
    this.processQueue();
  }

}

module.exports = JobQueue;