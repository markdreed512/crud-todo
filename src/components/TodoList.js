import React, { useState, useEffect } from 'react'
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
    const [initialRender, setInitialRender] = useState(true)
    // const [modalHidden, setModalHidden] = useState(true)
    // const [modalId, setModalId] = useState(null)
    const [modalValue, setModalValue] = useState("none!")
    useEffect(() => {
        console.log(modalValue)
        if (initialRender) {
            setInitialRender(false)
            
        }
    }, [modalValue])
    // const handleEditBtnPressed = (e) => {
    //     let todo = props.todos.filter(obj => {
    //         return obj.id === parseInt(e.target.id)
    //     })
    //     setModalValue(todo[0].value)
    //     //setModalValue doesn't work (yet?)
    //     // console.log(modalValue)
    //     // setModalId(parseInt(e.target.id))


    // }
    const getTodoValue = () => {
        return ("test....")
    }
    return (
        <>
            <EditModal handleChange={props.handleChange} hidden = {props.hidden} submit={props.submit}  modalVal={props.modalValue} />
            <Table>
                {props.todos.map((todo, i) => {
                    return (
                        <tbody style={{ padding: "0" }} key={i}>
                            <tr key={i}>
                                <td>
                                    <Checkbox type="checkbox" id={todo.id} onChange={props.handleCheck}
                                        //conditionally add or delete checked attribute on checkbox
                                        checked={todo.checked}
                                    /></td>
                                <Td key={i}>{todo.value}</Td>
                                <td>
                                    <EditButton onClick={props.handleEditClick} id={todo.id}>Edit</EditButton>
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

