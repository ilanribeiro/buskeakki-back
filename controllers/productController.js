const { response } = require('express');
const productService = require('../services/productService');
const { code201, code404, code500, message } = require('../utils/dictionary');

const saveFilter = async (request, response) => {
  const { web, category, searchTerm, results } = request.body;
  const filter = { web, category, searchTerm, results }

  const insertedId = await productService.saveFilter(filter);

  if (!insertedId) {
    return response.status(code500).json({ message: message.internalError });
  }

  return response.status(code201).json({ message: message.filterSaved });
};

const checkFilter = async (request, response) => {
  return response.status(code404).json([]);
}

module.exports = {
  saveFilter,
  checkFilter,
};
