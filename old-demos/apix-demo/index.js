const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('API-X Reqest!');
  console.log(req.url);
  console.log(req.headers);

  res.json({success: true});
});

app.listen(3000, () => {
  console.log('api-x demo running on port 3000');
});