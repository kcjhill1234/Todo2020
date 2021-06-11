import { useState } from "react";
export default function AddTodo({refresh}) {
  const [text, setText] = useState("")
  const addTodo = async () => {
    const response = await fetch("/api/todo", {
      method: 'post',
      headers: {
        'Content-Type': "application/json", 
      }, 
      body: JSON.stringify({
        text,
        complete: false,
      }),
    });
    setText("")
    refresh()
  }
  const onTextChange = (event) => {
    const value = event.target.value 
    setText(value)
  }
  return <div>
    <input type="text" value={text} onChange={onTextChange}/>
    <button onClick={addTodo}>Add</button>
  </div>;
}
