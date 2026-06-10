import React , {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchingthree() {

    const[loading,setLoading] = useState(true);
    const[error,seterror] = useState('')
    const[post,setPosts] = useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(Response=>{
            setLoading(false)
            setPosts(Response.data)
            seterror('')
        })
        .catch(error=>{
            setLoading(false)
            setPosts({})
            seterror('Something went wrong issue is there')
        })
    },[])

  return (
    <div>
        {loading ? 'Loading' : post.title}
        {error ? error : null}
    </div>
  )
}

export default DataFetchingthree