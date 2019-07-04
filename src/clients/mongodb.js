const { MongoClient } = require('mongodb');
const config = require('config');

const {
  url,
} = config.get('database');

module.exports = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, client) => {
      if (err) return reject(err);

      return resolve(client.db());
    });
  });
};
