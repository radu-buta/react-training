import { useGetTodosQuery } from "services/todos";
import { useGetUsersQuery } from "services/users";

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

  const isLoading = isGetTodoLoading || isGetUsersLoading;

  const errors = [getTodosError, getUsersError];
  const isError = errors.some((error) => error);

  return {
    isLoading,
    data: {
      todos,
      users,
    },
    errors: [getTodosError, getUsersError],
    isError,
  };
}
