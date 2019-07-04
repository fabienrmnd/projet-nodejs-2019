const { Router } = require('express');
const createOne = require('./middleware/createOne');
const findOneById = require('./middleware/findOneById');
const find = require('./middleware/find');
const updateOne = require('./middleware/updateOne');
const deleteOneById = require('./middleware/deleteOneById');

const router = new Router();

router.route('/users')
  .post(createOne)
  .get(find);

router.route('/users/:userId')
  .get(findOneById)
  .patch(updateOne)
  .delete(deleteOneById);

module.exports = router;
