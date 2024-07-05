import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  const addvalue = () =>{
    if(counter === 20) return;
    counter = counter+1;
    setCounter(counter);
    console.log("valueAdded ", counter);
  }
  const removevalue = () =>{
    if(counter === 0) return;
    counter = counter-1;
    setCounter(counter);
    console.log("valueRemoved ", counter);
  }

  return (
    <>
      <h1>chai aur code counter</h1>
      <button onClick={addvalue}>counter add value: {counter}</button>
      <br />
      <br />
      <button onClick={removevalue}>counter remove value : {counter}</button>
    </>
  )
}

export default App
