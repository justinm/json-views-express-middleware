"use strict";
var wtfnode = require('wtfnode');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZV90ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC9taWRkbGV3YXJlX3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVqQyxNQUFPLHlCQUF5QixXQUFXLFVBQVUsQ0FBQyxDQUFDO0FBQ3ZELE1BQU8sT0FBTyxXQUFXLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLE1BQU8sVUFBVSxXQUFXLGtCQUFrQixDQUFDLENBQUM7QUFFaEQsTUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFFcEMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWxCLFFBQVEsQ0FBQyw2QkFBNkIsRUFBRTtJQUV0QyxJQUFJLElBQUksR0FBRztRQUNULElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDO0lBRUYsRUFBRSxDQUFDLGtEQUFrRCxFQUFFLENBQUMsSUFBd0I7UUFDOUUsSUFBSSxHQUFHLEdBQW9CLE9BQU8sRUFBRSxDQUFDO1FBQ3JDLElBQUksTUFBbUIsQ0FBQztRQUV4QixHQUFHLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBRTFELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1lBQzFCLElBQUksQ0FBQztnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRXRDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM1QixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDakIsQ0FBRTtZQUFBLEtBQUssQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUIsT0FBTyxDQUFDLHdCQUF3QixFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJO1lBQ3RELElBQUksQ0FBQztnQkFDSCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUU1QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHNDQUFzQztZQUNwRCxDQUFFO1lBQUEsS0FBSyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDVixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQyxDQUFDIn0=