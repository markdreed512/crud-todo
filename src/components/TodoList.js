import React from 'react'

export default function TodoList(props) {
    return (
        <table>
            {props.todos.map((todo,i) => {
                return(
                    <tbody key={i}>
                        <tr key={i+1}>
                            <td key={i+2}>{todo.value}</td>
                            <td>
                                <button onClick={props.deleteItem} id={todo.id}>X</button>
                            </td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
    )
}

