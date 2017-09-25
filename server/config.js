

module.exports = {
  jwt : {
    secret : process.env.JWT_SECRET,
    issuer : process.env.JWT_ISSUER,
    // expires in seconds
    ttl : process.env.JWT_TTL ? parseInt(process.env.JWT_TTL) : (60 * 60),
    cookieName : process.env.JWT_COOKIE_NAME || 'fedora-jwt'
  }
}