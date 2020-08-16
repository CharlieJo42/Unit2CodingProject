const bcrypt = require('bcryptjs');

function comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword);
}

function loginREdirect(req, res, next){
    if (req.user) return res.redirect('/user');
    next();
}

module.exports = {
    comparePass,
    loginRedirect,
};