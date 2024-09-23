import "./todoitem.css"

export default function TodoItem(props){
    const {todo, updateCheckMark,deleteTodo, editTodo} = props;
    
    return (
        <div className="todo_item">
            <input type="checkbox" name={"cb" + todo.id} id={"cb" + todo.id} checked={todo.isDone} onChange={() => {console.log("changed"); updateCheckMark(todo.id)}}/>
            <label htmlFor={"cb" + todo.id}>{todo.name}</label>
            <button onClick={() => editTodo(todo.id)} className="edit_button">Edit</button>
            <button onClick={() => deleteTodo(todo.id)} className="delete_button">Delete</button>
        </div>
    )
}