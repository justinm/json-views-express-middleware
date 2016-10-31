json-serializers-express-middleware [![Build Status](https://travis-ci.org/justinm/json-serializers-express-middleware.svg?branch=develop)](https://travis-ci.org/justinm/json-serializers-express-middleware)
  [![Code Climate](https://codeclimate.com/github/justinm/node-json-serializers/badges/gpa.svg)](https://codeclimate.com/github/justinm/node-json-serializers)
  [![Test Coverage](https://codeclimate.com/github/justinm/node-json-serializers/badges/coverage.svg)](https://codeclimate.com/github/justinm/node-json-serializers/coverage)
===================================

Easily send objects in express responses using JSON views.

Example
-------

```javascript

var express = require('express');
var serializer = require('json-serializers');
var serializerMiddleware = require('json-serializers-express-middleware');

var app = express();
app.use(serializerMiddleware.middleware(serializer));

app.get('/', function(req, res, next) {
  res.serialize('test', {});  
});

```