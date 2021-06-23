const connection = require('./connection');

const COLLEC = 'filters'

const saveFilter = async (filter) => {
  const { web, category, searchTerm, results } = filter;

  const { insertedId } = await connection()
    .then((db) => db.collection(COLLEC).insertOne({ web, category, searchTerm, results }))

  return insertedId;
};

const findByFilterTerms = async (web, category, searchTerm) => {
  const selectedFilter = await connection()
    .then((db) => db.collection(COLLEC).findOne(
      { $and: [
        { web },
        { category },
        { searchTerm: { $regex: searchTerm, $options: 'i' } },
      ] },
      { _id: false },
    ))

  return selectedFilter;
};

module.exports = {
  saveFilter,
  findByFilterTerms,
};
