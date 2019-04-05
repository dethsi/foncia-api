const express = require('express');
const auth = require('../auth/auth');
const usersController = require('./users.controller');
const authenticatesController = require('./authenticates.controller');
const productsController = require('./products.controller');

const router = express.Router();

router
  .post('/users', auth.optional, usersController.create)
  .get('/users', auth.optional, usersController.showAll)
  .post('/users/authenticate', auth.optional, authenticatesController.create);
  //.post('/users/authenticate', auth.optional, usersController.authenticate)

router
  .post('/products', auth.required, productsController.create)
  .get('/products', auth.required, productsController.showAll)
  .delete('/products/:id', auth.required, productsController.destroy)
  .patch('/products/:id', auth.required, productsController.update);

  module.exports = router;
