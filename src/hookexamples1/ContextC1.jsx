import React, {useState}from 'react'
import ContextC2 from './ContextC2'

const ContextC1 = () => {
  const[count,setCount]=useState(0);
  let incre=()=>{
    setCount(count+1)
  }
  return (
    <div>ContextC1
      <h1>{count}</h1>
      <button onClick={incre}>increment</button>
      <hr/>
      <ContextC2/>
    </div>
  )
}

export default ContextC1