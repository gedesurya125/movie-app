import React, { useState, useEffect } from "react";
const Counter = (props) => {
  const [state, setState] = useState({
    count: 0
  });

  const handleButtonClick = (num) => {
    setState(state => ({
      ...state,
      count: state.count + Number(num)
    }))
  }

  const handleReset = () => {
    setState(state => ({
      ...state,
      count: 0
    }))
  }

  useEffect(() => {
    console.log("component DID MOUNT")
    return () => {
      console.log("component WILL UNMOUNT")
    }
  }, [])
  
  useEffect(() => {
      console.log("component DID UPDATE")
  }, [state.count])

  return (
    <div className="app">
    {console.log("Component DID RENDER")}
      <div className="count">
        <h3>count:&nbsp;</h3>
        <h1>{state.count}</h1>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick(-2)}>-2</button>
        <button onClick={() => handleButtonClick(-1)}>-1</button>
        <button onClick={() => handleReset()}>0</button>
        <button onClick={() => handleButtonClick(1)}>+1</button>
        <button onClick={() => handleButtonClick(2)}>+2</button>

      </div>
    </div>

  )
}
export default Counter;