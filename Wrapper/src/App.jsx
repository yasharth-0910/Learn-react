import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//real wrapper
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardWrapper>
        Hi there
      </CardWrapper>
      <CardWrapper>
        How are you?
      </CardWrapper>
    </>
  )
}


function CardWrapper({children}){
  //create a div which has a border (2px, solid, black), and inside the div render the prop
  
  return <div style={{border: "2px solid black",paddingLeft: "20px", display:"Flex",justifyContent:"center",fontSize:"50px"}}>
    {children}
  </div>
}

export default App