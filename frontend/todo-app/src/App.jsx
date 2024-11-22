/* eslint-disable no-unused-vars */
import {CreateTodo} from "./components/CreateTodo.jsx"
import {RenderTodos} from "./components/ToDos.jsx"
import './App.css'
import { useState } from "react"
import { set } from "mongoose";


function App() {
    const [todos,setTodos] = useState([]);//i want to append in it my data from backend.
    //try with axios
    fetch("http://localhost:3000/todo").then(async (res) => {
      const data = await res.json();
      setTodos(data.todos)
    })

  
  return (
    <div>
      <CreateTodo></CreateTodo>
      <br></br>
      {/* <RenderTodos todos={[
        {
          title:"abcd",
          description:"abcd",
          completed:false
          }
          ]}
          ></RenderTodos> */}
          <RenderTodos todos={todos} setTodos={setTodos} ></RenderTodos>

    </div>
  )
}

export default App


//this file still does not show things on frontend as ur show hardcoded stuff till now.
