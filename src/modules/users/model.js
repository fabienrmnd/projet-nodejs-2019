const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  firstname: joi.string().required(),
  lastname: joi.string().required(),
  password: joi.string().required(),
  email: joi.string().required(),
});

const createModelWithoutNames = joi.object().keys({
  password: joi.string().required(),
  email: joi.string().required(),
  firstName: joi.string(),
  lastName: joi.string(),
});

const updateModel = joi.object().keys({
  password: joi.string(),
  email: joi.string(),
  firstName: joi.string(),
  lastName: joi.string(),
});

module.exports = {
  createModel,
  createModelWithoutNames,
  updateModel,
};
