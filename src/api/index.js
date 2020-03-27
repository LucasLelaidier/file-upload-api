const express = require('express');
const upload = require('./routes/upload');
const files = require('./routes/files');

module.exports = () => {
    const app = express.Router();

    upload(app);
    files(app);

    return app;
};