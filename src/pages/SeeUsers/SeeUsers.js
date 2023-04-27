import Loader from "components/Loader";

import { useGetUsersAndTodos } from "hooks";

export default function SeeUsers() {
  const {
    data: { todos, users },
    errors,
    isError,
    isLoading,
  } = useGetUsersAndTodos();

  const renderError = () => {
    return (
      <div>
        Error:
        {errors.forEach((error) => {
          if (error) return <>{error.status}</>;
        })}
      </div>
    );
  };

  function filterTasksByUserId(userId) {
    const tasksFound = todos.filter((todo) => todo.assignedTo === userId);
    return tasksFound;
  }

  // console.log(findTasksByUserId(1));

  const renderUsers = () => {
    return (
      <ul style={{ textAlign: "left" }}>
        {isError
          ? renderError()
          : users.map((user) => {
              const foundTasks = filterTasksByUserId(user.id);

              return (
                <li key={user.id}>
                  {user.data.name}

                  {foundTasks ? (
                    <ol>
                      {foundTasks.map((todo) => (
                        <li key={todo.id}>{todo.data}</li>
                      ))}
                    </ol>
                  ) : (
                    <p>No task assigned</p>
                  )}
                </li>
              );
            })}
      </ul>
    );
  };

  return isLoading ? <Loader /> : renderUsers();
}
