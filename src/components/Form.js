import React from 'react'

export default function Form(props) {
    return (
        <div>
            <form action="submit" onSubmit = {props.handleSubmit}>
                <input type="text" placeholder = "enter item"/>
                <button type="submit">ADD</button>
            </form>
        </div>
    )
}
