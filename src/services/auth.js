const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/* eslint-disable class-methods-use-this */
module.exports = class AuthService {
    getToken(name, password) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, rows[0].CDM_HASH, (err, res) => {
                if (res) {
                    const token = jwt.sign(
                        {
                            
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: '24h',
                        },
                    );
                    resolve(token);
                }
                reject(err);
            });
        });
    }
};