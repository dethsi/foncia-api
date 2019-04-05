const config = require('config');
const http = require('http');
const Promise = require('bluebird');

const app = require('./app');

const httpServer = http.createServer(app);

httpServer.on('error', (error) => {
  throw error;
});

async function start() {
  await Promise.fromCallback(callback => httpServer.listen(config.get('api.port'), callback));
}

async function stop() {
  await Promise.fromCallback(callback => httpServer.close(callback));
}

module.exports = {
  httpServer,
  start,
  stop,
};
