json-serializers-express-middleware
===================================

Easily send objects in express responses using JSON views.

[![Build Status](https://travis-ci.org/justinm/json-serializers-express-middleware.svg?branch=develop)](https://travis-ci.org/justinm/json-serializers-express-middleware)
  [![Code Climate](https://codeclimate.com/github/justinm/json-serializers-express-middleware/badges/gpa.svg)](https://codeclimate.com/github/justinm/json-serializers-express-middleware)
  [![Test Coverage](https://codeclimate.com/github/justinm/json-serializers-express-middleware/badges/coverage.svg)](https://codeclimate.com/github/justinm/json-serializers-express-middleware/coverage)
  
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