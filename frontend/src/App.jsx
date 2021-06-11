import { useState, useEffect } from "react";
import Header from "./components/header";
import AddTodo from "./components/add-todo";
import TodoList from "./components/todo-list";

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const url = "/api/todo";
    const response = await fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dbTodos = await response.json();
    setTodos(dbTodos);
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <Header />
      <AddTodo refresh={getTodos} />
      <TodoList todos={todos} refresh={getTodos} />
    </div>
  );
}

export default App;
