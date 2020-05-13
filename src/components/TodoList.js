import React from 'react'
import styled from 'styled-components'
const Table = styled.table`
        margin: 20px;
       width: 40%;
       display: inline-block;
    `
const Td = styled.td`
    background-color: rgba(0,100,100,.5);
    font-size: 40px;
    border: 1px solid red;
    min-width: 80%;
`
const ButtonTd = styled.td`
    width: 20%;
`
export default function TodoList(props) {
    
    return (
        <Table>
            {props.todos.map((todo,i) => {
                return(
                    <tbody key={i}>
                        <tr key={i+1}>
                            <Td key={i+2}>{todo.value}</Td>
                            <td>
                                <button onClick={props.deleteItem} id={todo.id}>X</button>
                            </td>
                        </tr>
                    </tbody>
                )
            })}
        </Table>
    )
}

