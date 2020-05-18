import React from 'react'
import styled from 'styled-components'
const Table = styled.table`
    margin: 20px;
    width: 35%;
    display: inline-block;
    `
const Checkbox = styled.input`
width: 40px;
height: 40px;
margin: 0 5px;
`
const Td = styled.td`
    background-color: rgba(0,100,100,.5);
    color: white;
    font-size: 20px;
    min-width: 300px;
    // padding: 5px;
    font-family: 'Hind', sans-serif;
    margin: 0;
`
// const ButtonTd = styled.td`
//     width: 20%;
//     text-align: left !important;
// `
const Button = styled.button`
    font-size: 20px;
    background-color: pink;
    border: none;
    padding-top: 5px ;
    margin-left: 10px;
    font-family: 'Hind', sans-serif;
    width: 70px;
`
export default function TodoList(props) {

    return (
        <Table>
            {props.todos.map((todo, i) => {
                return (
                    <tbody style={{padding:"0"}}key={i}>
                        <tr key={i + 1}>
                            <Checkbox done="false" type="checkbox" id = {todo.id} onChange={props.handleCheck}/>
                            <Td key={i + 2}>{todo.value}</Td>
                            <td>
                                <Button onClick={props.deleteItem} id={todo.id}>X</Button>
                            </td>
                        </tr>
                    </tbody>
                )
            })}
        </Table>
    )
}

