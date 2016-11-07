declare namespace Express {
  export interface Response {
    view: (descriptorName: string, data: any) => any;
  }
}
