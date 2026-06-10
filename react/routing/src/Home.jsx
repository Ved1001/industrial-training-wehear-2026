import { useNavigate } from "react-router-dom"
import { useParams } from 'react-router-dom'

export default function Home(){
    const navigate= useNavigate()
    const params= useParams()
    const userId= params.userId

    return (
    <>
        <h1>Home page</h1>
        <button onClick={()=> navigate(`${userId}`)}>Place Order</button>
    </>
    )
}