/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// some html tag kindof a thing for rendering all these stuff on online.
import axios from "axios";
import { useState } from "react";

export  function RenderTodos({todos,setTodos}){
    // const  a =async(id)=>{
    //    const a = await axios.put("http://localhost:3000/completed",{_id:id});
    //    console.log();  
    // };
    function markTrue(){
        todos.setTodos({
            completed: true,
        })
    }

    return <div>
        {todos.map(function(todo){
            // console.log(todo);
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                {/* <button onClick={()=>a(todo._id)}>{todo.completed == true ? "completed" : "Mark as completed"}</button> */}
                <button onClick={markTrue} >{todo.completed == true ? "completed" : "Mark as completed"} </button>
                {console.log(todo.completed)}
            </div>
        })}
    </div>
}

