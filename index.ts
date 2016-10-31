/// <reference path="./index.d.ts" />
import express = require('express');
import jsonSerializers = require('json-serializers');

export function middleware(serializer: jsonSerializers.JsonSerializersStatic) {
  return function(req: express.Request, res: express.Response, next: (err: any) => void) {
    res.serialize = function (descriptorName: string, data: any) {
      res.send(serializer.serialize(descriptorName, data));
    };
    next(null);
  };
}
