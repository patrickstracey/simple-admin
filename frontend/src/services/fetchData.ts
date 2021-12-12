import { BaseInterface } from "../models/classroom.model";
import { getQuery } from "./queries";

export interface AdminHttpResponse {
  count: number;
  collection: BaseInterface[];
}

export async function fetchData(dataType: string): Promise<AdminHttpResponse> {
  const response = await fetch(`http://localhost:5000/${dataType}`);
  const result = await response.json();
  return result;
}

export async function fetchGraphQlData(
  dataType: string
): Promise<AdminHttpResponse> {
  const queryString = getQuery(dataType);
  const response = await fetch(`http://localhost:5000/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: queryString,
    }),
  });
  const json = await response.json();
  const result = json["data"][dataType];
  return result as AdminHttpResponse;
}
