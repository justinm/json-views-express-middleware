"use strict";
const serializer = require('json-serializers');
serializer.describe('test', function () {
    this.allow('test');
});
