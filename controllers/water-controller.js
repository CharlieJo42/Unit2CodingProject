const water = require ('../models/water');

const waterController = {
    index(req, res, next) {
        water.getAll()
        .then(water => {
            res.json ({
                water
            });
        }).catch(next);
    },
}

module.exports = waterController;