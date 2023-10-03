import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";
function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  function addTodo(text, category) {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  }
  function removeTodo(id) {
    const Todos = [...todos];
    const filteredTodos = Todos.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
      return null;
    });
    setTodos(filteredTodos);
  }
  function completeTodo(id) {
    const Todos = [...todos];
    Todos.map((todo) => {
      if (todo.id == id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(Todos);
  }
  return (
    <div className="app">
      <div className="todo-list">
        <h1>Lista de Tarefas</h1>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        {todos
          .filter((todo) => {
            if (filter == "all") {
              return true;
            } else if (filter == "completed") {
              return todo.isCompleted;
            } else {
              return !todo.isCompleted;
            }
          })
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => {
            if (sort == "Asc") {
              return a.text.localeCompare(b.text);
            } else {
              return b.text.localeCompare(a.text);
            }
          })
          .map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
