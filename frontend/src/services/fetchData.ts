import { AdminHttpResponse } from "../models/classroom.model";

async function fetchData(dataType: string): Promise<AdminHttpResponse> {
  const response = await fetch(`http://localhost:5000/${dataType}`);
  const result = await response.json();
  return result;
}

export default fetchData;
