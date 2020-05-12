import React from 'react'

function TodoList(props) {
    return (
        <ul>
            {props.todos}
        </ul>
    )
}

export default TodoList
{/* <div>
    {todos.map((todo, i) => (
        <li key={i}>{todo}</li>
    ))}
    </div> */}