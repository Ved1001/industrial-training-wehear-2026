import React, {useState,useEffect} from 'react'

function Hookuseeffectcountthree() {
    const [x,setx]= useState(0);
    const [y,sety]= useState(0);

    const logMousePosition = e => {
        console.log('Mouse event');
        setx(e.clientX);
        sety(e.clientY);
    }

    useEffect(() => {
        console.log('useeffect called');
        window.addEventListener('mousemove',logMousePosition);

        return ()=> {
            console.log('component unmounting code');
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    return (
    <div>
        Hooks X - {x} Y - {y}
    </div>
  )
}

export default Hookuseeffectcountthree