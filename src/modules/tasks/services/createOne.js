const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const listFindOneById = require('../../lists/services/findOneById');

module.exports = (taskToCreate, listId) => {
  const task = {
    ...taskToCreate,
    listId,
    checked: false,
  };

  return createModel.validate(task)
    .then(() => listFindOneById(listId))
    .then(() => connect())
    .then(db => db.collection(collections.TASKS))
    .then(collection => collection.insertOne(task))
    .then(dbResponse => dbResponse.ops[0]);

  /* Can also be write like the
  return model.validate(listToCreate, model)
    .then(() => {
      return connect()
    })
    .then((db) => {
      return db.collection(collections.LISTS)
    })
    .then((collection) => {
      return collection.insertOne(listToCreate)
    })
    .then((dbResponse) => {
      return dbResponse.ops[0]
    });
  */
};
