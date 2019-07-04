const bcrypt = require('bcrypt');
const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findIfEmailExists = require('./findIfEmailExists');

module.exports = (firstname, lastname, email, password) => {
  if (password == null) {
    const err = new Error('Password is not set');
    err.name = 'Internal Error';
    err.status = 500;
    throw err;
  }
  const encryptedPassword = bcrypt.hashSync(password, 10);

  return findIfEmailExists(email)
    .then(createModel.validate({
      firstname,
      lastname,
      email,
      password: encryptedPassword,
    }))
    .then(connect)
    .then(db => db.collection(collections.USERS))
    .then(collection => collection.insertOne({
      firstname,
      lastname,
      email,
      password: encryptedPassword,
    }))
    .then(dbResponse => dbResponse.ops[0]);
};
