const productModel = require('../models/productModel')

const saveFilter = async (filter) => {
  const insertedId = await productModel.saveFilter(filter);

  return insertedId;
};

module.exports = {
  saveFilter
};
