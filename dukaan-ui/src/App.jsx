import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//className = "text-center sm:text-left" //in mobile text will be center but after mobile(sm) breakpount text will be center

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-12'>
        <div className='bg-yellow-600 col-span-5'>Hi, how are you?</div>
        <div className='bg-green-600 col-span-2'>Hi, how are you?</div>
        <div className='bg-red-300 col-span-1'>Hi, how are you?</div>
        <div className='bg-blue-400 col-span-2'>Hi, how are you?</div>
        <div className='bg-lime-300 col-span-2 '>Hi, how are you?</div>


      </div>
    </>
  )
}

export default App
