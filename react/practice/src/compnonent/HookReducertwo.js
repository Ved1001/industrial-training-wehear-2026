import React,{useReducer} from 'react'

  const initial={
    firstcounter:0
  };

  const reducer = (state,action) => {
    
    switch(action.type){
      case 'increment':
        return {firstcounter : state.firstcounter+action.value}
      case 'decrement':
        return {firstcounter : state.firstcounter-action.value}
      case 'reset':
        return initial
      default:
        return state  
    }
  }

function HookReducertwo(){

    const [count,dispatch] =useReducer(reducer,initial);

  return (
    <div>
        <div>Count - {count.firstcounter}</div>
        <button onClick={()=> dispatch({type : 'increment' , value : 1})}>Increment</button>
        <button onClick={()=> dispatch({type : 'decrement' , value : 1})}>Decrement</button>
        <button onClick={()=> dispatch({type : 'increment' , value : 5})}>Increment 5</button>
        <button onClick={()=> dispatch({type : 'decrement' , value : 5})}>Decrement 5</button>
        <button onClick={()=> dispatch({type : 'reset'})}>Reset</button>
    </div>
  )
}

export default HookReducertwo