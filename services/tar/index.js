const express = require('express');
const app = express();
const {logger} = require('@ucd-lib/fin-node-utils');

app.use(require('./controllers'));
app.listen(3333, () => {
  logger.info('tar service listening on port 3333');
});