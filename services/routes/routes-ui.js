const express = require('express');

const routes = app => {
    app.use('/', express.static('dist'));
    app.use('/', express.static('dist/index.html'));
    app.use('/hello', express.static('dist/hello.html'));
};

module.exports = routes;