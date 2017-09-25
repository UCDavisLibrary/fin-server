var jwt = require('jsonwebtoken');

var admin = ['qjhart', 'jrmerz'];

class JwtFactory {

    init(cas) {
        this.cas = cas;
    }

    create(req) {
        var user = { 
            username: req.session[ this.cas.session_name ]
        }
        if( admin.indexOf(user.username) > -1 ) {
            user.admin = true;
        }

        return jwt.sign(
            user, 
            'testtestest', 
            {
                issuer: 'library.ucdavis.edu'
            }
        );
    }
}

module.exports = new JwtFactory();