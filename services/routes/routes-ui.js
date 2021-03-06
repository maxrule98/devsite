const express = require('express');

const routes = app => {
    app.use('/', express.static('dist'));
    app.use('/', express.static('dist/index.html'));
    app.use('/pricing', express.static('dist/pricing.html'));
    app.use('/portfolio', express.static('dist/portfolio.html'));
    app.use('/contact', express.static('dist/contact.html'));
    app.use('/contact-success', express.static('dist/contact-success.html'));
    app.use('/contact-fail', express.static('dist/contact-fail.html'));
    app.use('/blog', express.static('dist/posts.html'));
};

module.exports = routes;