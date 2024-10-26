

import Chai from "./chai"


function App() {
  const username = "chai aur code"

  return (
    <>
    <Chai/>
    <h1>chai aur react {username}</h1>
    {/* {username} is a evaluated expression, 
    username is not a javascript instead it is already evaluated */ }
    <p>test para</p>
   </>
  )
}

export default App
