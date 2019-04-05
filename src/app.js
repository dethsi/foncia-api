const bodyParser = require('body-parser');
const config = require('config');
const cookieParser = require('cookie-parser');
const express = require('express');
const morganBody = require('morgan-body');


const passport = require('../config/passport')
const restRouter = require('./rest-controllers/router');

const app = express();

function setJsonApiHeadersInResponse(req, res, next) {
  res.set('Content-Type', 'application/vnd.api+json');
  next();
}

function addHumanReadableHttpLogsMiddlewareInDevelopment(appInstance) {
  if (!['development', undefined].includes(process.env.NODE_ENV)) return;
  morganBody(appInstance);
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, GET, OPTIONS, PATCH, PUT, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json({ type: ['application/json', 'application/vnd.api+json'] }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
addHumanReadableHttpLogsMiddlewareInDevelopment(app);

app.use(`/api`, setJsonApiHeadersInResponse, restRouter);

module.exports = app;
