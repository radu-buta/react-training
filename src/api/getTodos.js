import Api from "./apiClient";
import { TODOS_ENDPOINT } from "./endpoints";

export async function getTodos() {
  const data = await Api.get(TODOS_ENDPOINT);
  return data;
}
