import { useState } from 'react'


function App() {
  const [color,setColor] = useState("olive")
  return (
    <div className='w-full h-screen duration-300' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-3'>
        <div className='flex flex-wrap gap-3 shadown-lg bg-white px-4 py-3 rounded-3xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-2 rounded-full text-white' style={{backgroundColor:"red"}}>
            Red
          </button>
          <button onClick={() => setColor("Green")} className='outline-none px-4 py-2 rounded-full text-white' style={{backgroundColor:"Green"}}>
            Green
          </button>
          <button onClick={() => setColor("Blue")} className='outline-none px-4 py-2 rounded-full text-white' style={{backgroundColor:"Blue"}}>
            Blue
          </button>
          <button onClick={() => setColor("Lavender")} className='outline-none px-4 py-2 rounded-full text-white' style={{backgroundColor:"Lavender"}}>
            Lavender
          </button>
          <button onClick={() => setColor("Orange")} className='outline-none px-4 py-2 rounded-full text-white' style={{backgroundColor:"Orange"}}>
            Orange
          </button>
          <button onClick={() => setColor("rVioleted")} className='outline-none px-4 py-2 rounded-full text-white' style={{backgroundColor:"Violet"}}>
            Violet
          </button>
          <button onClick={() => setColor("Black")} className='outline-none px-4 py-2 rounded-full text-white' style={{backgroundColor:"Black"}}>
            Black
          </button>
          <button onClick={() => setColor("Grey")} className='outline-none px-4 py-2 rounded-full text-white' style={{backgroundColor:"Grey"}}>
            Grey
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
