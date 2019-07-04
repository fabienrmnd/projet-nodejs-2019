const find = require('../services/find');

module.exports = (req, res, next) => {
  find()
    .then((bdd) => {
      res.json(bdd);
    })
    .catch((err) => {
      next(err);
    });
};
