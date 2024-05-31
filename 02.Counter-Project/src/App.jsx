import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(0)

  let ADD = 1;
  let SUB = -1;

  const addValue = () =>{
    setCounter(counter + 1)
  }

  const removeValue = () =>{

    setCounter(counter - 1)
    if(counter <= 0){
      setCounter(0)
    }
  
  }
  return (
    <>
      <h2>Mei hu Don</h2>
      <h2>Counter: {counter}</h2>
      <br />
      <button onClick={addValue}>Add value: {ADD}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value: {SUB}</button>
    </>
  )
}

export default App
