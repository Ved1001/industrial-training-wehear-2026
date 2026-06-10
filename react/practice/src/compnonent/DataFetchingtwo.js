import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchingtwo() {

    const [posts,setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [idfrombutton, setidfrombutton] = useState(1);

    const handleClick = ()=>{
        setidfrombutton(id)
    }

    useEffect(()=>{
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idfrombutton}`)
            .then(res=>{
                console.log(res);
                setPosts(res.data);
            })
            .catch( err=>{
                console.log(err);
            })
    },[idfrombutton])

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button type="button" onClick={handleClick}> Fetch Post </button>
    </div>
  )

}

export default DataFetchingtwo