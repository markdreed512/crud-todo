import React, { useState } from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
import TodoList from './components/TodoList'
function App() {
  const [ todos, setTodos ] = useState([])
  // const getTodosFromStorage = () => {
  //   //returns array of todos from Local storage
  //   if(localStorage.getItem("todos")){
  //     return localStorage.getItem("todos")
  //   }else{
  //     return [{
  //       value: "test",
  //       id: 1234
  //     }]
  //   }
    
  // }
  // const fromStorage = getTodosFromStorage()
  // setTodos(fromStorage)

  const handleSubmit = (e) => {
    let date = new Date()
    e.preventDefault()
    let newTodo = {
      value: e.target.children[0].value,
      id: date.getTime()
    }
    setTodos(todos.concat(newTodo))
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
