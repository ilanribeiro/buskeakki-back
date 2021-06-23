const apiBuscapeService = require('../services/apiBuscapeService');
const { code200 } = require('../utils/dictionary');

const getProducts = async (request, response) => {
  const { category, searchTerm } = request.body;

  const results = await apiBuscapeService.getProducts(category, searchTerm);
  // console.log(`results no Controller: `, results)

  return response.status(code200).json(results);
};

module.exports = {
  getProducts,
};
