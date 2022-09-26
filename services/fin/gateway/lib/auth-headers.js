

function stripAuthentication(req) {
  let token = req.get('Authorization');
  if( token && !token.match(/^Bearer /i) ) {
    delete req.headers.authorization;
  }
}

