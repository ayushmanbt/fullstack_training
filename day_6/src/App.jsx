import { useState } from "react"
import "./app.css"
import TestComponent from "./TestComponent";

function App() {

  let [count, setcount] = useState(0); 
  let [formInput, setFormInput] = useState(); 

  function increment(){
    // count = count + 1
    setcount(old => old + 1)
  }

  function decrement(){
    setcount(old => old - 1)
  }

  function formSubmit(e){
    e.preventDefault();
    setcount(Number(formInput));
    setFormInput(0);
  } 

  return (
    <>
       <h1>Hello from react</h1>
       <div className="flex">
        <button onClick={() => decrement()}>Subtract Count</button>
        <p>The count is: {count}</p>
        <button onClick={() => increment()}>Add Count</button>
       </div>
       <form onSubmit={(e) => formSubmit(e)}>
          {/* <input type="text" pattern="[0-9]+" /> */}
          <input type="number" required placeholder="Enter a value to set the counter to" value={formInput} onChange={(e) => setFormInput(e.target.value)}/>
          <input type="submit" value="Add the new value" />
       </form>
       <TestComponent count={count}/>
    </>
  )
}

export default App
