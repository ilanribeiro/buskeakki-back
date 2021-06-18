const { Router } = require('express');
const productController = require('../controllers/productController');

const route = Router();

// route.get('/', productController.setEnviroment);
route.post('/', productController.saveFilter);

module.exports = route;
