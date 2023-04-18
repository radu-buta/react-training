import Api from "./apiClient";
import { TODOS_ENDPOINT } from "./endpoints";

export async function postTodo(todo) {
  const response = await Api.post(TODOS_ENDPOINT, { data: todo });
  return response;
}
