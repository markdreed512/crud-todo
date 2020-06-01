import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
const Modal = styled.div`
    position: absolute;
    background-color: rgba(0,0,0, .9);
    padding: 20px 20px 30px 20px;
    left: 32%;
    top: 20%;
`
const Text = styled.p`
    color: teal;
    font-family: arial;
    font-size: 35px;
    margin-top: 0;
`
const Input = styled.input`
    font-size: 30px;
`
const Button = styled.button`
font-size: 30px;
`
function EditModal(props) {
    //the input needs the value of the todo passed to it from todoList component
    const [value, setValue] = useState(props.modalVal);
    const[hidden, setHidden] = useState(true)
    const[initialRender, setInitialRender] = useState(true)
    useEffect(()=>{
        setInitialRender(false)
    },[])
    useEffect(() => {
        setValue(props.modalVal)
        console.log(props.modalVal)
    }, [props.modalVal]);
    //try: render visible only after state updated useEffect
    useEffect(()=>{
        console.log(value)
        //if not initial render: setHidden(false)
        if(!initialRender){
            setHidden(false)
        }
        
    },[value])
    return (
        <Modal hidden={hidden} >
            <Text>Edit Item</Text>
            <form action="submit" onSubmit={props.submit}>
                <Input onChange={props.handleChange} type="text" defaultValue={props.modalValue} />
                <Button>OK</Button>
            </form>
        </Modal>
    )
}

export default EditModal
