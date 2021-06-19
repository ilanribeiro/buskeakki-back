const productModel = require('../models/productModel');
const { code200 } = require('../utils/dictionary');

const checkFilterExist = async (request, response, next) => {
  const { web, category, searchTerm } = request.body;

  const selectedFilter = await productModel.findByFilterTerms(web, category, searchTerm);

  if (selectedFilter) {
    return response.status(code200).json(selectedFilter);
  }

  next();
};

module.exports = {
  checkFilterExist,
};
