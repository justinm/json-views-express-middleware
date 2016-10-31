declare namespace Express {
  export interface Response {
    serialize: (descriptorName: string, data: any) => any;
  }
}
