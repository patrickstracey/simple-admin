export interface BaseInterface {
  _id: string;
  type: number;
  name?: string;
}

export interface AdminHttpResponse {
  count: number;
  collection: BaseInterface[];
}
