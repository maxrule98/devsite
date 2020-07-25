const express = require('express');

const routes = app => {
    app.use('/', express.static('dist'));
    app.use('/', express.static('dist/index.html'));
    app.use('/hello', express.static('dist/hello.html'));
    app.use('/hello', express.static('dist/pricing.html'));
};

module.exports = routes;