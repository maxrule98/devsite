const express = require('express');
const { Router } = require('express');
// const db = require('./db');

const routes = app => {
    const api = Router();
    api.post('/contact-submit', (req, res) => {
        console.log(req.body);
        const contactName = req.body.contactName;
        const firstName = contactName.split(" ")[0]  
        const contactEmail = req.body.contactEmail;
        res.send(`<h1>Thank you for reaching out, ${firstName.charAt(0).toUpperCase() + firstName.slice(1)}.</h1><br><h3>This service is currently under construction, so we will not recieve this message. Please try again later. 😁<h3>`);
    });

    app.use('/api/v1/', api);
};

module.exports = routes;





// name.charAt(0).toUpperCase() + name.slice(1)