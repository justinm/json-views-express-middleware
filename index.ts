/// <reference path="./index.d.ts" />
import express = require('express');
import views = require('json-views');

export function middleware(view: typeof views) {
  return function(req: express.Request, res: express.Response, next: (err: any) => void) {
    res.view = function (descriptorName: string, data: any) {
      res.send(view.view(descriptorName, data));
    };
    next(null);
  };
}
