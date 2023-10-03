
const Todo = ({todo, removeTodo, completeTodo}) => {
  return (

        <div className="todo" style={{
          textDecoration: todo.isCompleted ? "line-through" : ""
        }}>
          <div className="content">
            <h3>{todo.text}</h3>
            <p>({todo.category})</p>
          </div>
          <div>
            <button className="complete" onClick={()=> completeTodo(todo.id)} >Completar</button>
            <button className="delete" onClick={()=> removeTodo(todo.id)}>x</button>
          </div>
        </div>
  )
}

export default Todo