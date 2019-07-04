const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOne = require('./findOneById');
const { updateModel } = require('../model');

module.exports = (userId, userToUpdate) => {
  return updateModel.validate()
    .then(() => connect())
    .then(db => db.collection(collections.USERS))
    .then(collection => collection.updateOne({
      _id: ObjectId(userId),
    }, { $set: userToUpdate }))
    .then((dbResponse) => {
      if (dbResponse.matchedCount === 1) {
        return findOne(userId);
      }

      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
