import types from '../action-types'
const initialState = {
  username: null,
  error: null
}
export default function counter(state = initialState, {type, payload}) {
  switch (type) {
    case types.LOGIN_ERROR:
      return {...state, error: payload.error, username: null}
    case types.SET_USERNAME:
      return {...state, username: payload.username, error: null}
    default:
      return state
  }
}