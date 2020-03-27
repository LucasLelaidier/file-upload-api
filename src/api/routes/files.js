const express = require('express');

const filesMiddleware = require('../middlewares/files');

const route = express.Router();

module.exports = (app) => {
    app.use('/files', route);

    route.get('/*', filesMiddleware.getFile);
    route.delete('/*', filesMiddleware.deleteFile);
};