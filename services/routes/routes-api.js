const express = require('express');
const { Router } = require('express');
// const db = require('./db');

const routes = app => {
    const api = Router();

    api.get('/', (req, res) => {
        res.json({
            message: 'HELLO WORLD'
        });
    });

    api.post('/contact', (req, res) => {
        const { contactName, contactEmail } = req.body;

        if(contactName && contactEmail) {
            res.redirect('/contact-success')
        } else {
            res.redirect('/contact-fail');
            console.log('fail');
        }
    })

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