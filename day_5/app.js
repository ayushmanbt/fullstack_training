/*
{
    id ... number
    text ... string
    isDone ... boolean
}
*/
let count = 1

let todos = [
]

const todo_wrapper = document.getElementById("todo_list_wrapper");

function render(){
    todo_wrapper.innerHTML = ""

    todos.forEach(todo => {
        todo_wrapper.innerHTML += `
             <div class="todo_list_item">
                <input type="checkbox" name="cb${todo.id}" id="cb${todo.id}" ${todo.isDone && "checked"}>
                <label for="cb${todo.id}">${todo.text}</label>
                <button id="db${todo.id}">DELETE</button>
            </div>
        `
    })

    todos.forEach(todo => {
        document.getElementById(`cb${todo.id}`).addEventListener("change", () => {
            todos = todos.map(e =>  
            {
                if(e.id === todo.id){
                    e.isDone = !e.isDone
                }
                return e;
            }
            )
        })
        document.getElementById(`db${todo.id}`).addEventListener("click", () => {
            todos = todos.filter(e =>  e.id !== todo.id)
            render();
        })
    })
}

render();

const addTodoForm = document.getElementById("add");
const addTodoInput = document.getElementById("todo");

addTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let text = addTodoInput.value
    todos.push({
        id: count,
        text: text,
        isDone: false
    })
    count++;
    render();
    addTodoInput.value = "";
})