const express = require('express');
const waterLogRouter = express.Router();

waterLogRouter.get('/', (req, res) => {
    res.send('water intake goes here');
});

module.exports = waterLogRouter;