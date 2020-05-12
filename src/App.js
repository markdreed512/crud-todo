import React, { useState } from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
import TodoList from './components/TodoList'
function App() {
  const [ todos, setTodos ] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    let newTodo = e.target.children[0].value
    
    setTodos(todos.concat(newTodo))
  }


  return (
    <div>
      <Title />
      <Form handleSubmit = {handleSubmit}/>
      <TodoList todos={todos}/>
   
    
    </div>
  )
}

export default App;
