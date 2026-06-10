import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
        <div>Number of cakes - {props.numOfCakes}</div>
        <button onClick={props.buyCake}>
            Buy Cake
        </button>
    </div>
  )
}

const mapStateToProps = state =>{
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (CakeContainer)