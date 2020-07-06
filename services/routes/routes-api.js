const express = require('express');
const { Router } = require('express');
const db = require('./db');

const routes = app => {
    const api = Router();
    // api.get('/en-ms/:searchString', db.enMS);
    // api.get('/en-ms/materials', db.materials);
    // app.use('/api/v1/', api);
};

module.exports = routes;