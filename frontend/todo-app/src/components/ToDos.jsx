/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
//some html tag kindof a thing for rendering all these stuff on online.
export function RenderTodos({todos}){
    return <div>
        {todos.map(function(todo){
            // console.log(todo);
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "completed" : "Mark as completed"}</button>
            </div>
        })}
    </div>
}