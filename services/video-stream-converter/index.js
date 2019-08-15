const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(3333, () => {
  console.log('video-stream-converter up and running on port 3000');
});