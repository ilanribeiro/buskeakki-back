const apiBuscapeService = require('../services/apiBuscapeService');
const { code200 } = require('../utils/dictionary');

const getProducts = async (request, response) => {
  const { category, searchTerm } = request.body;

  const results = await apiBuscapeService.getProducts(category, searchTerm);

  return response.status(code200).json(results);
};

module.exports = {
  getProducts,
};
