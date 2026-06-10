import React,{useState,useEffect, useReducer} from 'react'
import axios from 'axios'

const initialstate= {
    loading : true,
    error : '',
    post: {}
}

const reducer = (state,action) => {
    switch(action.type){
        case 'FETCH_SUCCESS' :
            return {
                loading : false,
                post : action.payload,
                error : ''
            }
        case 'FETCH_ERROR' :
            return {
                loading : false,
                post : {},
                error : 'something error is here'
            }
        default:
            return state
    }
}

function DataFetchingfour() {
    const [state,dispatch] = useReducer(reducer,initialstate)

    useEffect(()=> {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then(Response => {
            dispatch({type: 'FETCH_SUCCESS', payload: Response.data})
        })
        .catch(error => {
            dispatch({type: 'FETCH_ERROR'})
        })
    },[])
  return (
    <div>
        {state.loading ? 'Loading' : state.post.title}
        {state.error ? state.error : null}
    </div>
  )
}

export default DataFetchingfour