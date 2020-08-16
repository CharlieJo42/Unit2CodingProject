const express = require('express');
const userRouter = express.Router();

const authHelpers = require('../services/auth/auth-helpers');

userRouter.get('/', (req, res) => {
    res.send('put a map of the oceans here or something');
})
userRouter.get("/new", authHelpers.loginREdirect, (req, res) => {
    res.render('auth/register');
});


userRouter.post('/', usersController.create);
module.exports = userRouter;