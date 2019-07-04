module.exports = (req, res) => {
  const { url } = req;
  const { method } = req;
  res.status(404).json({
    message: `No ressource found for ${url} with ${method} method`,
    status: 404,
  });
};
