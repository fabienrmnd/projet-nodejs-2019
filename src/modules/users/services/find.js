const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = () => {
  return connect()
    .then(db => db.collection(collections.USERS))
    .then(collection => collection.find())
    .then(cursor => cursor.toArray());
};
