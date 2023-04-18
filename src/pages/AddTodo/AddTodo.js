import { postTodo } from "api/postTodo";
import { useState } from "react";

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const [postSuccess, setPostSuccess] = useState(undefined);

  function handleChange(event) {
    setNewTodo(event.target.value);
    setPostSuccess(undefined);
  }

  async function onButtonClick() {
    const postResult = await postTodo(newTodo);
    setPostSuccess(postResult.success);
  }

  return (
    <div>
      <p>Add an item in TODO list</p>
      <div>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button onClick={onButtonClick}>Add this</button>

        {typeof postSuccess === "boolean" &&
          (postSuccess ? (
            <p>Post added successfully</p>
          ) : (
            <p>Something went wrong</p>
          ))}
      </div>
    </div>
  );
}
