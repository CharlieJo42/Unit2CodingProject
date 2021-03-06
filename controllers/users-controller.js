const bcrypt = require('bcrypt.js');
const User = require('../models/User');

const usersController = {
    index(req, res, next) {
        res.json({
            message: "put the entire ocean here!",
            user: req.user,
        })
    }
    create(req, res, next) {
        const salt = bcrypt.gelSaltSync();
        const hash = bcrypt.hashSync(req.body.password, salt);
        new User({
            username: req.body.username,
            email: req.body.email,
            password_digest: hash,
        })
        .save()
        .then((user) => {
            req.login(user, (err) => {
                if (err) return next(err);
                res.redirect('/user');
            });
        })
        .catch(next);
    }
}

module.exports = usersController;