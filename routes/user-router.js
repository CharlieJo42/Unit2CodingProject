const express = require('express');
const userRouter = express.Router();

const authHelpers = require('../services/auth/auth-helpers');

userRouter.get('/', usersController.index);
})
userRouter.get("/new", authHelpers.loginRedirect, (req, res) => {
    res.render('auth/register');
});


userRouter.post('/', usersController.create);
module.exports = userRouter;