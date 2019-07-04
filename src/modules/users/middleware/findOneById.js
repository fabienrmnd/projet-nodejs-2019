const findOneById = require('../services/findOneById');

module.exports = (req, res, next) => {
  const { userId } = req.params;
  findOneById(userId)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      next(err);
    });
};
