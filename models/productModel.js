const connection = require('./connection');

const COLLEC = 'filters'

const saveFilter = async (filter) => {
  const { web, category, searchTerm, results } = filter;

  const status = await connection()
    .then((db) => db.collection(COLLEC).insertOne({ web, category, searchTerm, results }))

  console.log(`status`, status);
};

module.exports = {
  saveFilter,
};
