const deleteOneById = require('../services/deleteOneById');

module.exports = (req, res, next) => {
  const { userId } = req.params;

  deleteOneById(userId)
    .then((deletedUser) => {
      res.json(deletedUser);
    })
    .catch((err) => {
      next(err);
    });
};
