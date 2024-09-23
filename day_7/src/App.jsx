import TodoItem from "./Components/TodoItem"
import "./app.css"
import { useEffect, useRef, useState } from "react"

function App() {
  const inputField = useRef();
  const [todos, setTodos] = useState([]);
  const [editing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  useEffect(() => {
    console.log(todos)
    inputField.current.value = ""
    setIsEditing(false)
  }, [todos])

  function updateCheckMark(id){
    setTodos(oldTodos => oldTodos.map(todo => {
      if(todo.id == id){
        todo = {...todo, isDone: !todo.isDone}
      }
      return todo
    }))
  }

  function editTodo(id){
    inputField.current.value = todos.filter(todo => todo.id == id)[0].name
    setIsEditing(true)
    setEditId(id)
  }

  function deleteTodo(id){
    setTodos(oldTodos => oldTodos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <div className="card">
        <h1>Todo App</h1>
        <form id="add" onSubmit={(e) => {
          e.preventDefault();
          if(editing){
            setTodos(oldTodos => oldTodos.map(todo => {
              if(todo.id == editId){
                todo = {...todo, name: inputField.current.value}
              }
              return todo
            }))
          }else{
          setTodos(oldState => [...oldState, {id: oldState.length + 1, isDone: false, name: inputField.current.value}]);
          }
        }}>
            <input ref={inputField} type="text" name="todo" id="todo" placeholder="Enter your TODO" required />
            <input type="submit" value={editing ? "Update Todo" : "Add Todo"} />
        </form>
        <div className="todo_list">
          {todos.map(todo => (
            <TodoItem updateCheckMark={updateCheckMark} key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>
          ))}
        </div>    
      </div>
    </>
  )
}

export default App
