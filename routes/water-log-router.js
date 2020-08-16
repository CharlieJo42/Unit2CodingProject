const express = require('express');
const waterController = require('../controllers/waterController');
const waterLogRouter = express.Router();

waterLogRouter.get('/', waterController.index);
waterLogRouter.post('/', waterController.create);
waterLogRouter.get('/new', (req, res) => {
    res.render('todos/new');
});

waterLogRouter.get('/:id([0-9]+)', waterController.show, (req, res) =>{
res.render('water/show', {
    water. res.locals.water,
})
});
waterLogRouter.get('/:id([0-9]+)/edit', waterController.show, (req, res) => {
    res.render('water/edit', {
        water: res.locals.water,
    })
});

module.exports = waterLogRouter;