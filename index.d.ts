declare module "json-views-express-middleware" {

  import * as jsonViews from 'json-views';

  namespace JsonViewsExpressMiddleware {
    export function middleware(views: jsonViews.JsonViewsStatic): void;
  }

  export = JsonViewsExpressMiddleware;
}

declare namespace Express {

  export interface Response {
    view: (descriptorName: string, data: any) => any;
  }

}
