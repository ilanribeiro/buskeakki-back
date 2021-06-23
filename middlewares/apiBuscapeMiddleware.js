const { code400, message } = require('../utils/dictionary');

const checkFields = async (request, response, next) => {
  const { category, searchTerm } = request.body;
  // console.log(`category no back`, category)
  // console.log(`searchTerm no back`, searchTerm)

  if (category.length === 0 || searchTerm.length === 0) {
    return response.status(code400).json({ message: message.fieldNotExist})
  }

  next();
};

module.exports = {
  checkFields,
};
