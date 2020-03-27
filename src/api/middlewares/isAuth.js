const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers.authorization; // Express headers are auto converted to lowercase

    if (token) {
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }

        return jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
            if (err) {
                return res.sendStatus(401);
            }
            req.decoded = decoded;
            return next();
        });
    }

    return res.sendStatus(401);
};

exports.checkToken = checkToken;