import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/cards'


let myobj =   {
  username: "Yasharth",
  age: 18
}

let newArr = [1,2,3]

function App() {

  return (
    <>
      <h1>Hello we do card</h1>
      <Card username="Yasharth" btnText="clickMe"/>
      <Card username="chaiaurcode" btnText="Mujeje" />
    </>
  )
}

export default App
