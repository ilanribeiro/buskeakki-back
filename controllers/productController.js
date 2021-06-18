const productService = require('../services/productService');

const saveFilter = async (request, response) => {
  const { filter } = request.body;

  const status = await productService.saveFilter(filter);

  if (!status) {
    return response.status(400).json({ message: 'Erro no salvamento'});
  }

  return response.status(201).json({ message: 'resultado da busca salvo com sucesso'});
};

// const setEnviroment = async (request, response) => {
//   return response.status(200).json(categories);
// };

// const searchProduct = async (request, response) => {
//   const { web, searchTerm } = request.body;

//   const products = await productService.searchProduct(web, searchTerm);

//   await response.status(200).json(products);
// };

module.exports = {
  saveFilter,
};
