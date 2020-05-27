import React from 'react'
import styled from 'styled-components'
import EditModal from './EditModal'
const Table = styled.table`
    margin: 20px;
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
    min-width: 100px;
    max-width: 300px;
    width: 300px;
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
const EditButton = styled.button`
    font-size: 20px;
    background-color: tan;
    border: none;
    padding-top: 5px ;
    margin-left: 10px;
    font-family: 'Hind', sans-serif;
 `
export default function TodoList(props) {

    return (
        <>
        <EditModal handleChange = {props.handleChange} modalValue = {props.modalValue} submit = {props.submit} hidden = {props.hidden} value = {props.modalValue}/> 
        <Table>
            {props.todos.map((todo, i) => {
                return (
                    
                    <tbody style={{padding:"0"}}key={i}>
                        
                        <tr key={i + 1}>
                            <td>
                            <Checkbox type="checkbox" id = {todo.id} onChange={props.handleCheck}
                            //conditionally add or delete checked attribute on checkbox
                            checked = {todo.checked}
                            /></td>
                            <Td key={i + 2}>{todo.value}</Td>
                            <td>
                                <EditButton onClick={props.handleEdit} id={todo.id}>Edit</EditButton>
                            </td>
                            <td>
                                <Button onClick={props.deleteItem} id={todo.id}>X</Button>
                            </td>
                            
                        </tr>
                    </tbody>
                )
            })}
        </Table>
        </>
    )
}

