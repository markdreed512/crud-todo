import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
import TodoList from './components/TodoList'
function App() {
  //  localStorage.removeItem("todos")
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  const [modalValue, setModalValue] = useState("none...")
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  })
  const [modalHidden, setModalHidden] = useState(true)
  // const [modalId, setModalId] = useState(null)
  const handleSubmit = (e) => {
    let date = new Date()
    e.preventDefault()
    let newTodo = {
      value: e.target.children[0].value,
      id: date.getTime(),
      checked: false
    }
    setTodos(todos.concat(newTodo))

    e.target.children[0].value = ""
  }
  const deleteItem = (e) => {
    let tdArr = todos
    let newArr = tdArr.reduce((acc, el) => {
      return el.id.toString() === e.target.id.toString() ? acc : acc.concat(el)
    }, [])
    setTodos(newArr)
  }
  const handleCheck = (e) => {
    e.persist()
    //e.target is the checkbox
    setTodos(todos.map(toodoo => {
      if (toodoo.id === parseInt(e.target.id)) {
        console.log("matched")
        if (toodoo.checked === false) {
          toodoo.checked = true
          console.log("here")
        } else {
          toodoo.checked = false
          console.log("there")
        }

      }
      return toodoo
    }))
  }
 
  // const submit = (e) => {
  //   e.preventDefault()
  //   //use modalId to find todo
  //   //set value to e.target...
  //   let newTodos = todos.map(todoObj => {
  //     if (todoObj.id === modalId) {
  //       todoObj.value = e.target.children[0].value
  //     }
  //     return todoObj
  //   })
  //   setTodos(newTodos)
  //   setModalHidden(true)
  // }
  const handleChange = (e) => {
    //needs to change modalValue state
    console.log("handling Change...")
    console.log(e.target.value)
    setModalValue(e.target.value)
    // if(e.target.checked){
    //   e.target.checked = ""
    // }
    // else{
      
    // }
  }
  const handleEditClick = (e) => {
         let todo = todos.filter(obj => {
            return obj.id === parseInt(e.target.id)
        })
        setModalValue(todo[0].value)
        setModalHidden(!modalHidden)
  }
  return (
    <>

      <Title />
      <Form handleSubmit={handleSubmit} />
      <TodoList
        todos={todos}
        handleCheck={handleCheck}
        deleteItem={deleteItem}
        // handleEdit={handleEdit}
        modalValue={modalValue}
        hidden={modalHidden}
        // submit={submit}
        handleChange={handleChange}
        handleEditClick = {handleEditClick}
      />


    </>
  )
}

export default App;
