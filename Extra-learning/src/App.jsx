import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter = 3;

function App() {
  const [todos, settodos] = useState([{
    id:1,
    title: "Learn React",
    description: "Learn React from scratch"

  },{
    id:2,
    title: "Learn Tailwind",
    description: "Learn Tailwind from scratch"
  },{
    id:3,
    title: "Learn Next",
    description: "Learn Next from scratch"
  }])

  function addTodo(){
    settodos.push([...todos,{
      id: counter++,
      title: "Learn Something new",
      description: "Learn new"
    }])
  }

  return (
    <>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(todo=> <Todo key= {todo.id}  title={todo.title} description={todo.description} />
      )}
    </>
  )
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
  
}

export default App
