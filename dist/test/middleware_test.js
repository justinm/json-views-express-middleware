"use strict";
const jsonViewsMiddleware = require('../index');
const express = require('express');
const view = require('json-views');
const request = require('request');
require('./test_view');
require('should');
describe('json-views-middleware', () => {
    var test = {
        test: true,
        hidden: true
    };
    it('should append a proxy method on express.Response', (done) => {
        var app = express();
        var server;
        app.use(jsonViewsMiddleware.middleware(view));
        app.get('/', (req, res, next) => {
            try {
                res.should.have.property('view');
                res.view('test', test);
                server.close();
            }
            catch (e) {
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
            }
            catch (e) {
                done(e);
            }
        });
    });
});
