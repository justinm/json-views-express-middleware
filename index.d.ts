/// <reference path="./node_modules/json-views/index.d.ts" />

declare module "json-views-express-middleware" {
  export = JsonViewsExpressMiddleware;
}

declare namespace JsonViewsExpressMiddleware {
  export function middleware(views: JsonViews.JsonViewsStatic): void;
}

declare namespace Express {
    export interface Response {
      view: (descriptorName: string, data: any) => any;
    }
}
