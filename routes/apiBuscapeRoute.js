const { Router } = require('express');
const apiBuscapeController = require('../controllers/apiBuscapeController');
const { checkFields } = require('../middlewares/apiBuscapeMiddleware');

const routes = Router();

routes.post('/', checkFields, apiBuscapeController.getProducts);

module.exports = routes;
