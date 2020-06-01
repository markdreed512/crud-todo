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
    // const [value, setValue] = useState(props.modalVal);
    const[hidden, setHidden] = useState(true)
    // const[initialRender, setInitialRender] = useState(true)
    // useEffect(()=>{
    //     setInitialRender(false)
    // },[])
    // useEffect(() => {
    //     setValue(props.modalVal)//<-why doesn't this update input value?
    //     console.log(props.modalVal)
    // }, [props.modalVal]);
    // useEffect(()=>{
    //     console.log(value)
    //     if(!initialRender){
    //         setHidden(false)
    //     }
    // },[value])
    return (
        <Modal hidden={props.hidden} >
            <Text>Edit Item</Text>
            <form action="submit" onSubmit={props.submit}>
                <Input onChange={props.handleChange} value={props.modalVal} />
                <Button>OK</Button>
            </form>
        </Modal>
    )
}

export default EditModal
