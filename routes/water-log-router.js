const express = require('express');
const waterController = require('../controllers/waterController');
const waterLogRouter = express.Router();

waterLogRouter.get('/', waterController.index);
waterLogRouter.post('/', waterController.create);
waterLogRouter.get('/new', (req, res) => {
    res.render('todos/new');
});

waterLogRouter.get('/:id([0-9]+', waterController.show);

module.exports = waterLogRouter;