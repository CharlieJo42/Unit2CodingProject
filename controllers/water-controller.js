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

    create(req, res, next) {
            new water(req.body).save()
            .then(todo => {
                res.json({ todo })
            }).catch(next)
    },
}

module.exports = waterController; 