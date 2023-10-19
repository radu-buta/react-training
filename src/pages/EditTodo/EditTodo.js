import { useParams } from "react-router-dom";

import { useGetUsersAndTodos } from "hooks";

import { useUpdateTodoMutation } from "services/todos";
import { useEffect, useState } from "react";

import Loader from "components/Loader";
import { PARAMS } from "routes";

export default function EditTodo() {
  const [newTodoValue, setNewTodoValue] = useState("");

  const [updateTodo, { error, isError, reset, isSuccess }] =
    useUpdateTodoMutation();

  const { [PARAMS.TODO_ID]: todoId } = useParams();

  const {
    data: { todos },
    errors: getUsersAndTodosErrors,
    isError: isErrorOnGetUsersAndTodos,
    isLoading,
  } = useGetUsersAndTodos();

  const [currentTodo, setCurrentTodo] = useState("");

  // wait for data to be fetched using useEffect

  useEffect(() => {
    if (todos && todoId) {
      setCurrentTodo(findTodoById(todoId));
    }
  }, [todos, todoId]);

  function findTodoById(id) {
    const todo = todos.find((todo) => todo.id === Number(id));
    if (!todo) return;
    return todo;
  }

  const renderError = () => {
    return (
      <div>
        Error
        {getUsersAndTodosErrors.map((error) => {
          if (error) return error.status;
        })}
      </div>
    );
  };

  function handleChange(event) {
    setNewTodoValue(event.target.value);
    // setIsUpdateSuccessful(undefined);
    reset();
  }

  async function onButtonClick() {
    const newTodoData = { ...currentTodo, data: newTodoValue };

    await updateTodo(newTodoData);
    console.log(newTodoData);
  }

  const renderTodo = () => {
    return isErrorOnGetUsersAndTodos ? (
      renderError()
    ) : (
      <>
        <p>{currentTodo.data}</p>

        <div>
          <input type="text" value={newTodoValue} onChange={handleChange} />
          <button onClick={onButtonClick}>Update</button>

          {isError && <p>{error.error}</p>}
          {isErrorOnGetUsersAndTodos && <p></p>}
          {isSuccess && <p>Item updated successfully: " {newTodoValue} "</p>}
        </div>
      </>
    );
  };

  return isLoading ? <Loader /> : renderTodo();
}
