const { Issuer } = require('openid-client');
const express = require('express');
const { auth } = require('express-openid-connect');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const app = express();

app.use(auth({
  issuerBaseURL: 'https://keycloak:8443/realms/dams-local-dev',
  baseURL: 'http://localhost:3000',
  clientID: 'dams-local-dev',
  secret: 'rBtnqiqtCh8bAJ7bxmjXDE5Ez3UqumjD',
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
    console.log(session);
    return session
  }
}));

app.get('/', (req, res) => {
  res.json({test:1});
});



// (async function() {
//   const googleIssuer = await Issuer.discover('https://192.168.86.21:8443/realms/dams-local-dev');
//   console.log('Discovered issuer %s %O', googleIssuer.issuer, googleIssuer.metadata);
// })()

app.listen(3000, () => {
  console.log('listening on port 3000');
});