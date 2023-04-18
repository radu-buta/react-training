import Api from "./apiClient";
import { USERS_ENDPOINT } from "./endpoints";

export async function getUsers() {
  const data = await Api.get(USERS_ENDPOINT);
  return data;
}
