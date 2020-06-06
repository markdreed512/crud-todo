import React from 'react'
import styled from 'styled-components'
const Input = styled.input`
    font-size: 30px;
    padding: 5px;
    max-width: 80%;
`
const Button = styled.button`
    font-size: 30px;
    padding: 5px;
`
export default function Form(props) {
    return (
        <div>
            <form action="submit" onSubmit = {props.handleSubmit}>
                <Input type="text" placeholder = "enter item"/>
                <Button type="submit">ADD</Button>
            </form>
        </div>
    )
}
