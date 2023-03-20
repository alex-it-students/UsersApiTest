const bodyParser = require('body-parser');
const express = require('express');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: true }));
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    });

};

