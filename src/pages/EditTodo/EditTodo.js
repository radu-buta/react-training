import { useParams } from "react-router-dom";

import { useGetUsersAndTodos } from "hooks";

import { updateTodo } from "api/updateTodo";
import { useState } from "react";

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

  function findTodoDataById(id) {
    return todos.find((todo) => todo.id === id);
  }
  const todoData = findTodoDataById(todoId);

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
    const [newTodo, setNewTodo] = useState("");
    const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(undefined);

    function handleChange(event) {
      setNewTodo(event.target.value);
      setIsUpdateSuccessful(undefined);
    }

    async function onButtonClick() {
      const todoData = todos.find((todo) => todo.id === todoId);
      const newTodoData = { ...todoData, data: newTodo };

      const updatedTodo = await updateTodo(todoId, newTodoData);
      setIsUpdateSuccessful(updatedTodo.success);
    }

    return (
      <>
        <p>{todoData.data}</p>

        <div>
          <input type="text" value={newTodo} onChange={handleChange} />
          <button onClick={onButtonClick}>Update</button>

          {typeof isUpdateSuccessful === "boolean" &&
            (isUpdateSuccessful ? (
              <p>Item updated successfully</p>
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
