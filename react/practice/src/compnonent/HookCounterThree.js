import React,{useState} from 'react'

function HookCounterThree() {

    const [name,setName] = useState({ firstname:'',lastname:''});

  return (
    <form>
        <input type="text" value={name.firstname} onChange={e=> setName({...name,firstname : e.target.value})}></input>
        <input type="text" value={name.lastname} onChange={e=> setName({...name,lastname:e.target.value})}></input>

        <h2>your first name is : {name.firstname}</h2>
        <h2>your last name is : {name.lastname}</h2>
    </form>
  )
}

export default HookCounterThree