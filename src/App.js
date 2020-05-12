import React, { useState } from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
function App() {
  const { todos, setTodos } = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    let newTodo = e.target.children[0].value
    
    setTodos(todos.push(todo))
  }


  return (
    <div>
      <Title />
      <Form handleSubmit = {handleSubmit}/>
      
      {/* todos.map(todo => {
        <li>todo</li>
      }) */}
    
    </div>
  )
}

export default App;
