import types from '../action-types'
const actionCreators = {
  login(username, password) {
    const payload = {username, password}
    return {type: types.LOGIN_REQUEST, payload}
  },
  logout() {
    return {type: types.LOGOUT}
  }
}
export default actionCreators