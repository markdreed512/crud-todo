import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
import TodoList from './components/TodoList'
function App() {
  // localStorage.removeItem("todos")
  const [ todos, setTodos ] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  })
  const handleSubmit = (e) => {
    let date = new Date()
    e.preventDefault()
    let newTodo = {
      value: e.target.children[0].value,
      id: date.getTime(),
      checked: false
    }
    setTodos(todos.concat(newTodo))
    //console.log(todos)--added new todo to state
    
    e.target.children[0].value = ""
  }
  const deleteItem = (e) => {
    let tdArr = todos
    let newArr = tdArr.reduce((acc, el)=>{
      return el.id.toString() === e.target.id.toString()? acc : acc.concat(el)
    },[])
    setTodos(newArr)
  }
const handleCheck = (e) => {
  if(e.target.done === "true"){
    e.target.done = "false"
  }else{
    e.target.done = "true"
  }
  //find item in state
  //match id's
  //get id of checked item
  console.log(e.target.id)
  //for each todo obj in state arr, if id's match, changed checked
  todos.forEach(todo=>{
    if(todo.id === e.target.id){
      //how do we use setTodo to update?
      todo.checked = e.target.done === "true"? true : false
    }
  })
  //change checked property
  //save in local storage(useEffect already doing this?)
}

  return (
    <>
      <Title />
      <Form handleSubmit = {handleSubmit}/>
      <TodoList 
        todos={todos} 
        handleCheck = {handleCheck}
        deleteItem ={deleteItem}
      />
   
    
    </>
  )
}

export default App;
