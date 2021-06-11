import { useState } from "react";

export default function TodoListItem({ todo, refresh }) {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(todo.text);

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };
  const deleteTodo = async () => {
    const response = await fetch(`/api/todo/${todo._id}`, {
      method: "delete",
    });
    refresh();
  };
  const editText = (event) => {
    const value = event.target.value;
    setText(value);
  };
  const cancelEdit = () => {
    toggleEditMode();
    setText(todo.text);
  };
  const saveEdit = async () => {
    const response = await fetch(`/api/todo/${todo._id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todo, text }),
    });
    toggleEditMode();
    refresh();
  };
  const toggleComplete = async () => {
    const response = await fetch(`/api/todo/${todo._id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todo, complete: !todo.complete }),
    });
    refresh();
  };

  const renderText = editMode ? (
    <input type="text" value={text} onChange={editText} />
  ) : (
    <span onClick={toggleComplete} className={todo.complete ? "complete" : ""}>{todo.text}</span>
  );
  const renderButtons = editMode ? (
    <>
      <button onClick={saveEdit}>Save</button>
      <button onClick={cancelEdit}>Cancel</button>
    </>
  ) : (
    <>
      <button onClick={toggleEditMode}>Edit</button>
      <button onClick={deleteTodo}>X</button>
    </>
  );
  return (
    <li>
      {renderText}
      {renderButtons}
    </li>
  );
}
