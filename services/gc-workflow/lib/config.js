const {config} = require('@ucd-lib/fin-node-utils');

config.gcWorkflow = {
  topics : (process.env.GC_WORKFLOW_TOPICS || '').split(',').map(item => item.trim())
}

module.exports = config;