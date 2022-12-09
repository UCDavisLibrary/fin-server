const express = require('express');
const { auth } = require('express-openid-connect');
const {config} = require('@ucd-lib/fin-service-utils');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const app = express();

app.use(auth({
  issuerBaseURL: config.oidc.baseUrl,
  baseURL: config.server.url,
  clientID: config.oidc.clientId,
  secret: config.oidc.secret,
  routes : {
    callback : '/auth/keycloak-oidc/callback',
    login : '/auth/keycloak-oidc/login',
    logout : '/auth/keycloak-oidc/logout',
    postLogoutRedirect : '/auth/keycloak-oidc/postLogoutRedirect'
  },
  authorizationParams: {
    scope : 'roles openid profile email'
  },
  idpLogout: true,
  afterCallback : (req, res, session, decodedState) => {
    res.set('X-FIN-AUTHORIZED-TOKEN', session.id_token);
    return session
  }
}));

app.get('/', (req, res) => {
  res.json({test:1});
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});