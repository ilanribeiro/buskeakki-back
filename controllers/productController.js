const productService = require('../services/productService');
const { code201, code500, message } = require('../utils/dictionary');

const saveFilter = async (request, response) => {
  const { web, category, searchTerm, results } = request.body;
  const filter = { web, category, searchTerm, results }

  const insertedId = await productService.saveFilter(filter);

  if (!insertedId) {
    return response.status(code500).json({ message: message.internalError });
  }

  return response.status(code201).json({ message: message.filterSaved });
};

module.exports = {
  saveFilter,
};
