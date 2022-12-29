const express = require('express');
const { auth } = require('express-openid-connect');
const {config} = require('@ucd-lib/fin-service-utils');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
})

// always set long hashes as secret:
// openssl rand -base64 512 | tr -d '\n'
app.post('/auth/'+config.oidc.finLdpServiceName+'/service-account/token', async (req, res) => {
  let apiResp = await fetch(config.oidc.baseUrl+'/protocol/openid-connect/token', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    },    
    body: new URLSearchParams({
      grant_type : 'password',
      client_id : config.oidc.clientId,
      client_secret : config.oidc.secret,
      username : req.body.username,
      password : req.body.secret,
      scope : config.oidc.scopes
    })
  });

  let json = await apiResp.json();

  // strip id_token, don't have 3rd party users bother with this.
  if( apiResp.status === 200 ) {
    delete json.id_token;
  }

  res
    .status(apiResp.status)
    .json(json);
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