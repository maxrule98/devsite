const express = require('express');
const { Router } = require('express');
const mailchimp = require('../controllers/mailchimp');

const routes = app => {
    const api = Router();

    api.post('/contact-submit', mailchimp.signup);

    app.use('/api/v1/', api);
};

module.exports = routes;

    // api.post('/contact-submit', (req, res) => {
    //     console.log(req.body);
    //     const contactName = req.body.contactName;
    //     const firstName = contactName.split(" ")[0]  
    //     const contactEmail = req.body.contactEmail;
    //     res.redirect('/contact-success');
    //     res.json({
    //         firstName: firstName
    //     })
    // });