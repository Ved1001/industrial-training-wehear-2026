import React,{useState,useEffect} from 'react'

function Hookuseeffectcounttwo() {
    const [x,setx]= useState(0);
    const [y,sety]= useState(0);

    const logMousePosition = e => {
        console.log('Mouse event');
        setx(e.clientX);
        sety(e.clientY);
    }

    useEffect(()=>{
        console.log('useEffect called');
        window.addEventListener('mousemove',logMousePosition);
    },[])

  return (
    <div>
        Hooks X - {x} and Y - {y}
    </div>
  )
}

export default Hookuseeffectcounttwo