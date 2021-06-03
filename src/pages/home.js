import React from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions/counter'
import store from '../store'

export const home = (props) => {
  console.log('home props', props)
  const {dispatch} = store
  const {number, name, add, addAsync} = props
  return (
    <div style={{textAlign: 'center'}}>
      <h1>home</h1>
      <p>number: {number}</p>
      <p><button onClick={add}>+</button></p>
      <p><button onClick={() => dispatch(actions.minus())}>-</button></p>
      <h1>fetch</h1>
      <p>name: {name}</p>
      <p><button onClick={addAsync}>+(async)</button></p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(home)
