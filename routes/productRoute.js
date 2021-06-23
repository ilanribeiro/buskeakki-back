const { Router } = require('express');
const productController = require('../controllers/productController');
const { checkFilterExist } = require('../middlewares/productMiddleware');

const route = Router();

// route.get('/', productController.setEnviroment);
route.post('/filter', checkFilterExist, productController.checkFilter);
route.post('/', checkFilterExist, productController.saveFilter);

module.exports = route;
