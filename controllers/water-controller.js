const water = require ('../models/water');
const { delete } = require('../routes/water-log-router');

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
    let incomingStatus = false;
    if (req.body.status === 'done'){
        incomingStatus= = true;
    }
    water.getById(req.params.id)
    .then(foundWater => {
        foundWater.updatw({
            id: req.body.id,
            amount: incomingStatus
        });
    }).then(updatedWater => {
        res.redirect(`/water/${updatedWater.id}`);
    }).catch(next);
   
}

delete(req, res, next) {
    water.getById(req.params.id)
    .then(water => {
        return water.delete();
    }).then(() => {
        res.redirect('/water');
    }).catch(next);
};

module.exports = waterController; 