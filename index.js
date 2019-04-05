const config = require('config');
const mongoose = require('mongoose');

const user = require('./src/schema/user');
const product = require('./src/schema/product');
const httpServer = require('./src/server');

mongoose.promise = global.Promise;

async function start() {
  try {
    mongoose.connect(config.get('mongodb.url'), { useNewUrlParser: true });
    // mongoose.set('debug', true);
    await httpServer.start();
  } catch (err) {
    process.exit(-1);
  }
}

async function stop() {
  console.log('server graceful shutdown...');
  await httpServer.stop();
  mongoose.connection.close()
}

process.on('SIGINT', () => {
  stop().then(process.exit);
});

module.exports = {
  start,
  stop,
};
