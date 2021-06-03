import types from '../action-types'
const initialState = {number: 0}
export default function counter(state = initialState, {type, payload}) {
  switch (type) {
    case types.ADD:
      return {...state, number:state.number + 1, ...payload}
    case types.MINUS:
      return {...state, number:state.number - 1, ...payload}
    default:
      return state
  }
}