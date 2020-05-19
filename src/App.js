import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
import TodoList from './components/TodoList'
function App() {
  //  localStorage.removeItem("todos")
  const [ todos, setTodos ] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  const [ modalVal, setModalVal ] = useState("none")
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  })
  const [modalHidden, setModalHidden] = useState(true)
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
  // if(e.target.done === "true"){
  //   e.target.done = "false"
  // }else{
  //   e.target.done = "true"
  // }
 
//   setTodos(newState)
  
//   function newState(){
//     return todos.map(obj => {
//       if(obj.id === parseInt(e.target.id)){
//         console.log("matched")
//         if(e.target.done === "true"){
//           obj.checked = true
//         }else{
//           obj.checked = false
//         }

//       }
//       return obj
//     })
//   }
  
//   console.log(todos)
}
const handleEdit = (e) => {
  setModalHidden(false)
  //find obj, get value
  todos.forEach(todoObj=>{
    if(todoObj.id === parseInt(e.target.id)){
      setModalVal(todoObj.value)
    }
  })
  //render editModal
  //populate modal with value
  //get id of item to set state
  
}
  return (
    <>
      
      <Title />
      <Form handleSubmit = {handleSubmit}/>
      <TodoList 
        todos={todos} 
        handleCheck = {handleCheck}
        deleteItem ={deleteItem}
        handleEdit = {handleEdit}
        modalValue = {modalVal}
        hidden = {modalHidden}
      />
   
    
    </>
  )
}

export default App;
