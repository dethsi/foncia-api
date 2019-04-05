const defer = require('config/defer').deferConfig;

module.exports = {
  api: {
    name: 'foncia-api',
    port: 8000,
    url: defer(function deferApiUrl() {
      return `http://localhost:${this.api.port}`;
    }),
  },
  mongodb: {
    url : 'mongodb://localhost:27017/FonciaBdd'
  }
};
