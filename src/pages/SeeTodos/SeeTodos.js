import { updateTodo } from "api/updateTodo";

import Loader from "components/Loader";

import { useGetUsersAndTodos } from "hooks";

export default function SeeTodos() {
  const {
    data: { todos, users },
    errors,
    isError,
    isLoading,
  } = useGetUsersAndTodos();

  function findUserById(id) {
    const userFound = users.find((user) => user.id === id);
    return userFound;
  }

  function handleChange(event) {
    const todoId = Number(event.target.id);
    const userId = Number(event.target.value);
    const todoData = todos.find((todo) => todo.id === todoId);
    const newTodoData = { ...todoData, assignedTo: userId };

    updateTodo(todoId, newTodoData);
  }

  function handleEditTodo(event) {
    console.log(event.target.id);
  }

  const renderUserSelector = ({ todoId }) => {
    return (
      <select id={todoId} style={{ marginLeft: 8 }} onChange={handleChange}>
        {users.map((user) => {
          return (
            <option key={user.id} value={user.id}>
              {user.data.name}
            </option>
          );
        })}
      </select>
    );
  };

  const renderError = () => {
    return (
      <div>
        Error
        {errors.forEach((error) => {
          if (error) return <>{error.status}</>;
        })}
      </div>
    );
  };

  const renderTodos = () => {
    return (
      <ol style={{ textAlign: "left" }}>
        {isError
          ? renderError()
          : todos.map((todo) => {
              const foundUser = findUserById(todo.assignedTo);
              return (
                <li key={todo.id} style={{ marginBlock: 8 }}>
                  {todo.data}

                  {foundUser ? (
                    <>
                      <i style={{ marginInline: 8 }}>
                        - Assigned to {foundUser.data.name}
                      </i>
                      <button id={todo.id} onClick={handleEditTodo}>
                        Edit
                      </button>
                    </>
                  ) : (
                    renderUserSelector({ todoId: todo.id })
                  )}
                </li>
              );
            })}
      </ol>
    );
  };

  return isLoading ? <Loader /> : renderTodos();
}
