import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)
  // UseState changes the stage, it does not change the value but propagate the change
  // in the UI

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1 , it is not going to update the counter in UI(actually it is
    // increasing but not visible in UI), this is the reason to use hook as the changes should 
    // be visible in UI also
    // This signifies that the UI updation is controlled by React

    /*setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)*/
    // In the above scenario it is not going to inc. the counter by 4 because useState 
    // send the updates of UI in batches so here as allof them is doing the same work so
    // it is considered as a single work
    
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    // But in this scenario it is going to increase the value by 4
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue} // Here we are just passing the reference(addValue) not 
                         // addValue() because we want it to execute on click of the button
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
