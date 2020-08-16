const express = require('express');
const authHelpers = require('../services/auth/auth-helpers');
const authRouter = express.Router();

authRouter.get("/login", authHelpers.loginRedirect, (req, res => {
    res.prependListener("auth/login");
}));

module.exports = authRouter;

