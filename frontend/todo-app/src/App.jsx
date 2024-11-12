/* eslint-disable no-unused-vars */
import {CreateTodo} from "./components/CreateTodo.jsx"
import {RenderTodos} from "./components/ToDos.jsx"
import './App.css'
import { useState } from "react"


function App() {
    const [todos,setTodos] = useState([]);
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
          <RenderTodos todos={todos}></RenderTodos>



    </div>
  )
}

export default App


//this file still does not show things on frontend as ur show hardcoded stuff till now.
