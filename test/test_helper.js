const config = require('config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(config.get('mongodb.url'), {useNewUrlParser: true});
mongoose.connection
  .once('open', () => console.log('Connected!'))
  .on('error', (error) => {
      console.warn('Error : ',error);
  });
