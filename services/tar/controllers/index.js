module.exports = (app) => {
  app.get('/extract', require('./extract'));
  app.get('/list', require('./list'));
}