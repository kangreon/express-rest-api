const { database } = require('./src/config/config.json');

module.exports = {
  development: database,
  staging: database,
  production: database,
};
