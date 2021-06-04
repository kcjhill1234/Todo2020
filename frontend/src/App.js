import {useState, useEffect} from "react"

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = async () => {
    const response = await fetch("/api/todo", {
      method: 'post',
      headers: {
        'Content-Type': "application/json", 
      }, 
      body: JSON.stringify({
        text: 'Test Todo',
        complete: false,
      }),
    });
  }

  const getTodos = async () => {
    const url = "/api/todo"
    const response = await fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const dbTodos = await response.json()
    setTodos(dbTodos)
  }
  useEffect(() => {
    getTodos()
  }, [])
  return (
    <div>
      <h1>
        testing
      </h1>
      <div>
        <ul>
          {todos.map(({text}) => <li>{text}</li>)}
        </ul>
      </div>
      <div>
        <pre>
          <code>{JSON.stringify(todos, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}

export default App;
