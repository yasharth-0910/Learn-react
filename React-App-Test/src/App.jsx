import { useState, useEffect } from 'react'
import './App.css'

//Example of useState hook

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <button style={{
//         backgroundColor: 'green',
//         //make button in center
//         display: 'block',
//         margin: 'auto',
//         marginTop: '10px',
//         padding: '10px',
//         color: 'white',
//         borderRadius: '10px',
//         border: 'none',
//         cursor: 'pointer'}} 
//         onClick={function(){
//         setCount(count + 1);
//       }}> Count is {count}</button>
//     </>
//   )
// }







// USE EFFECT HOOK






// function App() {
//   const [exchangeData, setExchangeData] = useState({});
//   const [bankData, setBankData] = useState({});
  
//   useEffect(() => {
//     fetch("https://google.com", async (res) => {
//       const json = await res.json();
//       setBankData(json);
//       // Assume it is { income: 100 }
//     });
//   }, []); // [] means it will only run once when the component is mounted and never again on re-renders of the component 

//   useEffect(() => {
//     setTimeout(() => {
//       setBankData({
//         income: 100
//       });
//     }, 3000);
//   }, [])// [] means it will only run once when the component is mounted and never again on re-renders of the component

//   useEffect(() => {
//     setTimeout(() => {
//       setExchangeData({
//         returns: 100
//       });
//     }, 1000);
//   }, [])// [] means it will only run once when the component is mounted and never again on re-renders of the component
  

//   const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

//   return (
//     <div>
//         hi there, your income tax returns are {incomeTax}
//     </div>
//   )
// }

// export default App




//useMemo hook

function App(){
        
}

export default App