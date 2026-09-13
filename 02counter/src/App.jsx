import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0);
  const addValue=()=>{
    setCounter(()=>{
      if(counter<20) return counter+1;
      return 20;
    });
  }
  const removeValue=()=>{
    setCounter(()=>{
      if(counter>0) return counter-1;
      return 0;
    });
  }
  return (
    <>
    <h1>Chai aur Code</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
