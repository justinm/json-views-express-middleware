/// <reference path="./index.d.ts" />
import express = require('express');
import views = require('json-views');

declare namespace Express {
  export interface Response {
    view: (descriptorName: string, data: any) => any;
  }
}

export function middleware(view: views.JsonViewsStatic) {
  return function(req: express.Request, res: express.Response, next: (err: any) => void) {
    res.view = function (descriptorName: string, data: any) {
      res.send(view.view(descriptorName, data));
    };
    next(null);
  };
}
