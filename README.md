json-serializers-express-middleware
===================================

Easily send serialized objects in express responses.


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