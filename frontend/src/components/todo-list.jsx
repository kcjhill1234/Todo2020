import TodoListItem from "./todo-list-item";

export default function TodoList({ todos, refresh }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoListItem key={todo._id} todo={todo} refresh={refresh}/>
        ))}
      </ul>
    </div>
  );
}
