import { useParams } from "react-router-dom";

import { useGetUsersAndTodos } from "hooks";

import Loader from "components/Loader";
import { PARAMS } from "routes";

export default function EditTodo() {
  const { [PARAMS.TODO_ID]: todoId } = useParams();

  const {
    data: { todos },
    errors,
    isError,
    isLoading,
  } = useGetUsersAndTodos();

  function findTodoById(id) {
    const todoData = todos.find((todo) => todo.data === id);
    return todoData;
  }
  console.log(findTodoById(todoId));

  const renderError = () => {
    return (
      <div>
        Error
        {errors.forEach((error) => {
          if (error) return error.status;
        })}
      </div>
    );
  };

  const renderChangeCurrentTodo = () => {
    return (
      <>
        <p>Current todo item: {todoId}</p>
        <p>Current todo item: {findTodoById(todoId)}</p>

        {todos.map((todo) => {
          return (
            <>
              <p>{todo.data}</p>
            </>
          );
        })}

        <div>
          <input type="text" />
          <button>Update</button>

          {typeof postSuccess === "boolean" &&
            (postSuccess ? (
              <p>Post added successfully</p>
            ) : (
              <p>Something went wrong</p>
            ))}
        </div>
      </>
    );
  };

  const renderTodo = () => {
    return isError ? renderError() : renderChangeCurrentTodo();
  };

  return isLoading ? <Loader /> : renderTodo();
}
