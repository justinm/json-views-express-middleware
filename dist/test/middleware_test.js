"use strict";
const jsonSerializersMiddleware = require('../index');
const express = require('express');
const serializer = require('json-serializers');
const request = require('request');
require('./test_serializer');
require('should');
describe('json-serializers-middleware', () => {
    var test = {
        test: true,
        hidden: true
    };
    it('should append a proxy method on express.Response', (done) => {
        var app = express();
        var server;
        app.use(jsonSerializersMiddleware.middleware(serializer));
        app.get('/', (req, res, next) => {
            try {
                res.should.have.property('serialize');
                res.serialize('test', test);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZV90ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC9taWRkbGV3YXJlX3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU8seUJBQXlCLFdBQVcsVUFBVSxDQUFDLENBQUM7QUFDdkQsTUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFDcEMsTUFBTyxVQUFVLFdBQVcsa0JBQWtCLENBQUMsQ0FBQztBQUVoRCxNQUFPLE9BQU8sV0FBVyxTQUFTLENBQUMsQ0FBQztBQUVwQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUM3QixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFbEIsUUFBUSxDQUFDLDZCQUE2QixFQUFFO0lBRXRDLElBQUksSUFBSSxHQUFHO1FBQ1QsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFFRixFQUFFLENBQUMsa0RBQWtELEVBQUUsQ0FBQyxJQUF3QjtRQUM5RSxJQUFJLEdBQUcsR0FBb0IsT0FBTyxFQUFFLENBQUM7UUFDckMsSUFBSSxNQUFtQixDQUFDO1FBRXhCLEdBQUcsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFMUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7WUFDMUIsSUFBSSxDQUFDO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFdEMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQixDQUFFO1lBQUEsS0FBSyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDVixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQixPQUFPLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUk7WUFDdEQsSUFBSSxDQUFDO2dCQUNILElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTVCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsc0NBQXNDO1lBQ3BELENBQUU7WUFBQSxLQUFLLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNWLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUVMLENBQUMsQ0FBQyxDQUFDO0FBRUwsQ0FBQyxDQUFDLENBQUMifQ==