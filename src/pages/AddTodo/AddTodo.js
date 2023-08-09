// import { postTodo } from "api/postTodo";
import { useState } from "react";
import { usePostTodoMutation } from "../../services/todos";

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState("");

  const [create, { error, isError, reset, isSuccess }] = usePostTodoMutation();

  function handleChange(event) {
    setNewTodo(event.target.value);
    reset();
  }

  async function onButtonClick() {
    await create(newTodo);
  }

  return (
    <div>
      <p>Add an item in TODO list</p>
      <div>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button onClick={onButtonClick}>Add this</button>

        {isError && <p>{error.error}</p>}
        {isSuccess && <p>Post added successfully</p>}
      </div>
    </div>
  );
}
