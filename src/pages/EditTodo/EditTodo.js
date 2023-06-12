import { useParams } from "react-router-dom";

import { useGetUsersAndTodos } from "hooks";

import { updateTodo } from "api/updateTodo";
import { useState } from "react";

import Loader from "components/Loader";
import { PARAMS } from "routes";

export default function EditTodo() {
  const [newTodoValue, setNewTodoValue] = useState("");
  const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(undefined);

  const { [PARAMS.TODO_ID]: todoId } = useParams();

  const {
    data: { todos },
    errors,
    isError,
    isLoading,
  } = useGetUsersAndTodos();

  function findTodoById(id) {
    const todo = todos.find((todo) => todo.id === Number(id));
    if (!todo) return;
    return todo;
  }
  const currentTodo = findTodoById(todoId);
    console.log(currentTodo);

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

  function handleChange(event) {
    setNewTodoValue(event.target.value);
    setIsUpdateSuccessful(undefined);
  }

  async function onButtonClick() {
    const newTodoData = { ...currentTodo, data: newTodoValue };

    const updatedTodo = await updateTodo(todoId, newTodoData);
    setIsUpdateSuccessful(updatedTodo.success);
  }

  const renderTodo = () => {
    return isError ? renderError() :
        <>
          <p>{currentTodo.data}</p>

          <div>
            <input type="text" value={newTodoValue} onChange={handleChange} />
            <button onClick={onButtonClick}>Update</button>

            {typeof isUpdateSuccessful === "boolean" &&
                (isUpdateSuccessful ? (
                    <p>Item updated successfully</p>
                ) : (
                    <p>Something went wrong</p>
                ))}
          </div>
        </>
  };

  return isLoading ? <Loader /> : renderTodo();
}
