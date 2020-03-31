const users = require("../routes/users");
const auth = require("../routes/auth.js");
const express = require("express");

module.exports = (app) => {
    app.use(express.json());
    app.use('/api/users', users);
    app.use('/api/auth', auth);
}
