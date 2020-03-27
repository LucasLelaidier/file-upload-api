const express = require('express');
const { check } = require('express-validator');

const route = express.Router();
const uploadMiddleware = require('../middlewares/upload');
const validator = require('../middlewares/validator');

module.exports = (app) => {
    app.use('/upload', route);

    const criteria = [
        check('file').not().isEmpty(),
    ];

    route.post('/', uploadMiddleware.upload, (req, res) => res.json({ "endpoint": req.endpoint }));
};