import { useEffect, useState } from "react";

import { getTodos } from "api/getTodos";
import { getUsers } from "api/getUsers";
import { updateTodo } from "api/updateTodo";

import { useGetTodosQuery } from "services/todos";

export default function SeeTodos() {
  // st [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [errorState, setErrorState] = useState("");

  // async function fetchTodos() {
  //   const todosData = await getTodos();
  // if (todosData.success) {
  //    setTodos(todosData.data);
  // } else {
  //     setErrorState(todosData.errorMessage);
  // }
  // }

  async function fetchUsers() {
    const usersData = await getUsers();
    if (usersData.success) {
      setUsers(usersData.data);
    } else {
      setErrorState(usersData.errorMessage);
    }
  }

  // const { data: todos, status, error } = useGetTodosQuery();

  console.log(todos);

  useEffect(() => {
    fetchTodos();
    fetchUsers();
  }, []);

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

  const renderTodos = () => {
    return (
      <ol style={{ textAlign: "left" }}>
        {errorState ? (
          <p>{errorState}</p>
        ) : (
          todos.map((todo) => {
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
          })
        )}
      </ol>
    );
  };

  return renderTodos();
}
