const express = require('express');
const waterController = require('../controllers/waterController');
const waterLogRouter = express.Router();

waterLogRouter.get('/', waterController.index);
waterLogRouter.post('/', waterController.create);
module.exports = waterLogRouter;