import React, { useState } from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
import TodoList from './components/TodoList'
function App() {
  localStorage.removeItem("todos")
  const [ todos, setTodos ] = useState(localStorage.getItem("todos") || [{value:"test...",id: 12345,checked: false}])

  const handleSubmit = (e) => {
    let date = new Date()
    e.preventDefault()
    let newTodo = {
      value: e.target.children[0].value,
      id: date.getTime(),
      checked: false
    }
    setTodos(todos.concat(newTodo))
    localStorage.setItem("todos", JSON.stringify(todos))
    e.target.children[0].value = ""
  }
  const deleteItem = (e) => {
    let tdArr = todos
    let newArr = tdArr.reduce((acc, el)=>{
      return el.id.toString() === e.target.id.toString()? acc : acc.concat(el)
    },[])
    setTodos(newArr)
  }


  return (
    <>
      <Title />
      <Form handleSubmit = {handleSubmit}/>
      <TodoList todos={todos} deleteItem ={deleteItem}/>
   
    
    </>
  )
}

export default App;
