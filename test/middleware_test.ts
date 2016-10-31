import mocha = require('mocha');
import jsonSerializersMiddleware = require('../index');
import express = require('express');
import serializer = require('json-serializers');
import sinon = require('sinon');
import request = require('request');
import http = require('http');
require('./test_serializer');
require('should');

describe('json-serializers-middleware', () => {

  var test = {
    test: true,
    hidden: true
  };

  it('should append a proxy method on express.Response', (done: (err: any) => void) => {
    var app: express.Express = express();
    var server: http.Server;

    app.use(jsonSerializersMiddleware.middleware(serializer));

    app.get('/', (req, res, next) => {
      try {
        res.should.have.property('serialize');

        res.serialize('test', test);
        server.close();
      } catch(e) {
        done(e);
      }
    });

    server = app.listen(3000);

    request('http://localhost:3000/', (error, response, body) => {
      try {
        var json = JSON.parse(body);

        json.should.not.have.property('hidden');
        json.should.have.property('test');

        done(null); // This test is finished, close it out
      } catch(e) {
        done(e);
      }
    });

  });

});