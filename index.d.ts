declare module "json-views-express-middleware" {

  namespace JsonViewsExpressMiddleware {
    export function middleware(views: JsonViews.JsonViewsStatic): void;
  }

  export = JsonViewsExpressMiddleware;
}

declare module "express-serve-static-core" {

  export interface Response {
    view: (descriptorName: string, data: any) => any;
  }

}
