import React, { useState } from 'react'

function HookCounterTwo() {

    const initialcount = 0;
    const [count,setCount]= useState(initialcount);
    
    const incrementfive = ()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount+1);
        }
    }

  return (
    <div>
        count : {count}
        <button onClick={()=>{setCount(initialcount)}}>reset</button>
        <button onClick={()=>{setCount(count+1)}}>Next</button>
        <button onClick={()=>{setCount(count-1)}}>Previous</button>
        <button onClick={()=>{incrementfive()}}>Increment by 5</button>
    </div>
  )
}

export default HookCounterTwo