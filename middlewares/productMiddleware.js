const productModel = require('../models/productModel');
const { code200 } = require('../utils/dictionary');

const checkFilterExist = async (request, response, next) => {
  const { web, category, searchTerm } = request.body;
  console.log(`web no back: `, web)
  console.log(`category no back: `, category)
  console.log(`searchTerm no back: `, searchTerm)

  const selectedFilter = await productModel.findByFilterTerms(web, category, searchTerm);
  console.log(`selectedFilter no back: `, selectedFilter)

  if (selectedFilter) {
    return response.status(code200).json(selectedFilter);
  }

  next();
};

module.exports = {
  checkFilterExist,
};
