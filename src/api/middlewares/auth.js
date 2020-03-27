const AuthService = require('../../services/auth');

const authentify = (req, res, next) => {
    const authService = new AuthService();
    authService.getToken(req.body.nom, req.body.password).then((token) => {
        if (token) {
            req.result = token;
            return next();
        }
        return res.sendStatus(400);
    });
};

exports.authentify = authentify;