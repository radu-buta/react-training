import Api from "./apiClient";
import { TODOS_ENDPOINT } from "./endpoints";

export async function updateTodo(todoId, todoData) {
  const response = await Api.put(`${TODOS_ENDPOINT}/${todoId}`, todoData);
  return response;
}
