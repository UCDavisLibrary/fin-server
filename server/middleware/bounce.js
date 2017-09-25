var jwt = require('../lib/jwt');

// wrapper for case bounce
// setting our auth token
module.exports = (cas) => {
    return (req, res, next) => {
        cas.bounce(req, res, () => {
            setCookie(req, res);
            next();
        });
    }
}

function setCookie(req, res) {
    res.cookie(
        'fedora-jwt', 
        jwt.create(req), 
        {   
            httpOnly: true,
            domain: 'localhost',
            // secure: true     
        }
    );
}