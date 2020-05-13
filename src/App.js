import React, { useState } from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
import TodoList from './components/TodoList'
function App() {
  const [ todos, setTodos ] = useState([])
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
    <div>
      <Title />
      <Form handleSubmit = {handleSubmit}/>
      <TodoList todos={todos} deleteItem ={deleteItem}/>
   
    
    </div>
  )
}

export default App;
