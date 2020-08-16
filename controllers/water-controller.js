const water = require ('../models/water');

const waterController = {
    index(req, res, next) {
        water.getAll()
        .then(water => {
            res.render('water/index', {
                water,
            });
        }).catch(next);
    },

    create(req, res, next) {
            new water {
                id: req.body.id,
                amount: req.body.amount,
            }
            
            
            
            (req.body).save()
            .then(todo => {
                res.json({ todo })
            }).catch(next)
    },

    show(req, res, next) {
        water.getById(req.params.id)
        .then((water) => {
            res.render('water/show', { water });
        })
        .catch(next);

}}

update(req, res, next) {
    console.log(req.body);
    res.send('update here');
}

module.exports = waterController; 