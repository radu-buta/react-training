import useGetTodosQuery from "services/todos";
import useGetUsersQuery from "services/users";

export default function useGetUsersAndTodos() {
  const {
    data: todos,
    isLoading: isGetTodoLoading,
    error: getTodosError,
  } = useGetTodosQuery();

  const {
    data: users,
    isLoading: isGetUsersLoading,
    error: getUsersError,
  } = useGetUsersQuery();
}
