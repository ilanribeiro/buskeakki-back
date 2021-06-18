const productModel = require('../models/productModel')

const saveFilter = async (filter) => {
  const status = await productModel.saveFilter(filter);

  return status;
};

// const searchProduct = (web, searchTerm) => {
//   selectAPI(web, searchTerm);
// };

module.exports = {
  saveFilter
};
