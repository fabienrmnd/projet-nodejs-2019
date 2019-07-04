const createOne = require('../services/createOne.js');

module.exports = (req, res, next) => {
  const { firstname } = req.body;
  const { lastname } = req.body;
  const { email } = req.body;
  const { password } = req.body;

  createOne(firstname, lastname, email, password)
    .then((newUser) => {
      res.json({
        _id: newUser._id, // eslint-disable-line no-underscore-dangle
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
      });
    })
    .catch((err) => {
      next(err);
    });
};
