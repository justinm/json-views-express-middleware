declare module "json-views-express-middleware" {

  import * as express from 'express';
  import * as jsonViews from 'json-views';

  namespace JsonViewsExpressMiddleware {
    export function middleware(views: typeof jsonViews): express.RequestHandler;
  }

  export = JsonViewsExpressMiddleware;
}

declare namespace Express {

  export interface Response {
    view: (descriptorName: string, data: any) => any;
  }

}
