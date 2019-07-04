const findIfEmailExists = require('../services/findIfEmailExists');

module.exports = (req, res, next) => {
  const { mail } = req.params;
  findIfEmailExists(mail)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      next(err);
    });
};
