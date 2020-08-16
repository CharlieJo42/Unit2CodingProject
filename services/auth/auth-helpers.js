const bcrypt = require('bcryptjs');

function comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword);
}

function loginREdirect(req, res, next){
    if (req.user) return res.redirect('/user');
    next();
}

function loginRequire(req, res, next) {
    if (!req.user) return res.redirect('/auth/login');
}
module.exports = {
    comparePass,
    loginRedirect,
};