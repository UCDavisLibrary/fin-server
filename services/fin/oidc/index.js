const express = require('express');
const { auth } = require('express-openid-connect');
const {config, keycloak} = require('@ucd-lib/fin-service-utils');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();

app.use(bodyParser.json());

// always set long hashes as secret:
// openssl rand -base64 512 | tr -d '\n'
// add policy to expire secret after one year.
app.post('/auth/'+config.oidc.finLdpServiceName+'/service-account/token', async (req, res) => {
  let loginResp = await keycloak.loginServiceAccount(
    req.body.username, req.body.secret
  );

  // strip id_token, don't have 3rd party users bother with this.
  if( loginResp.status === 200 ) {
    delete loginResp.body.id_token;
  }

  res
    .status(loginResp.status)
    .json(loginResp.body);
});

app.use(auth({
  issuerBaseURL: config.oidc.baseUrl,
  baseURL: config.server.url,
  clientID: config.oidc.clientId,
  clientSecret: config.oidc.secret,
  secret : config.jwt.secret,
  routes : {
    callback : '/auth/'+config.oidc.finLdpServiceName+'/callback',
    login : '/auth/'+config.oidc.finLdpServiceName+'/login',
    logout : '/auth/'+config.oidc.finLdpServiceName+'/logout',
    postLogoutRedirect : '/auth/'+config.oidc.finLdpServiceName+'/postLogoutRedirect'
  },
  authorizationParams: {
    response_type: 'code',
    scope : config.oidc.scopes
  },
  idpLogout: true,
  afterCallback : (req, res, session, decodedState) => {
    res.set('X-FIN-AUTHORIZED-TOKEN', session.access_token);
    return session
  }
}));

app.listen(3000, () => {
  console.log('listening on port 3000');
});