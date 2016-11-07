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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZV90ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC9taWRkbGV3YXJlX3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU8sbUJBQW1CLFdBQVcsVUFBVSxDQUFDLENBQUM7QUFDakQsTUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFDcEMsTUFBTyxJQUFJLFdBQVcsWUFBWSxDQUFDLENBQUM7QUFFcEMsTUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFFcEMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVsQixRQUFRLENBQUMsdUJBQXVCLEVBQUU7SUFFaEMsSUFBSSxJQUFJLEdBQUc7UUFDVCxJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUVGLEVBQUUsQ0FBQyxrREFBa0QsRUFBRSxDQUFDLElBQXdCO1FBQzlFLElBQUksR0FBRyxHQUFvQixPQUFPLEVBQUUsQ0FBQztRQUNyQyxJQUFJLE1BQW1CLENBQUM7UUFFeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUU5QyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtZQUMxQixJQUFJLENBQUM7Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVqQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2pCLENBQUU7WUFBQSxLQUFLLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNWLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFCLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSTtZQUN0RCxJQUFJLENBQUM7Z0JBQ0gsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxzQ0FBc0M7WUFDcEQsQ0FBRTtZQUFBLEtBQUssQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQyJ9