import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [length, setLength] = useState(7)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [number, setNumberAllowed] = useState(false)
  const [symbol, setSymbolAllowed] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=> {

    let pass = ""
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"
    if(includeUppercase){
      char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if(includeLowercase){
      char += "abcdefghijklmnopqrstuvwxyz"
    }
    if(number){
      char += "0123456789"
    }
    if(symbol){
      char += "!@#$%^&*()_+"
    }
    for(let i = 0; i < length; i++){
      pass += char.charAt(Math.floor(Math.random() * char.length))
    }
    setPassword(pass)

  }, [ length, includeUppercase, includeLowercase, number, symbol, char, setPassword])

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    
      <div className='flex flex-col items-center justify-center h-screen'>

        <div className='flex flex-col gap-4 bg-white p-10 rounded-lg'>
        <div className='flex flex-col gap-2'>

        <label htmlFor='password'>Password</label>

        <input
          id='password'
          type='text'
          value={password}
          className='p-4 border border-gray-300 rounded-md' 
          readOnly

        />
        <button className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>COPY</button>


        </div>  

          <div className='flex flex-col gap-2'>


            <label htmlFor='length'>Password Length</label>

            <input
              id='length'
              type='range'
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className='p-2 border border-gray-300 rounded-md'
            />

          </div>
 
          <div className='flex flex-col gap-2'>

            <label htmlFor='uppercase'>Include Uppercase</label>

            <input
              id='uppercase'
              type='checkbox'
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />

          </div>

          <div className='flex flex-col gap-2'>
              
              <label htmlFor='lowercase'>Include Lowercase</label>
  
              <input
                id='lowercase'
                type='checkbox'
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
              />

          </div>

          <div className='flex flex-col gap-2'>

            <label htmlFor='number'>Include Number</label>

            <input
              id='number'
              type='checkbox'
              checked={number}
              onChange={(e) => setNumberAllowed(e.target.checked)}

            />

          </div>

          <div className='flex flex-col gap-2'>

            <label htmlFor='symbol'>Include Symbol</label>

            <input
              id='symbol'
              type='checkbox'
              checked={symbol}
              onChange={(e) => setSymbolAllowed(e.target.checked)}

            />

          </div>

          <button
            onClick={passwordGenerator}
            className='p-2 bg-blue-500 text-white rounded-md'
          >

            Generate Password

          </button>
        </div>

      </div>  
    </>
  )
}

export default App
