import React from 'react'

export default function TodoList(props) {
    return (
        <div>
            {props.todos.map(todo => {
                return(<li>{todo}</li>)
            })}
        </div>
    )
}

