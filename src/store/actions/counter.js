import types from '../action-types'
const actionCreators = {
  add() {
    return {type: types.ADD}
  },
  minus() {
    return {type: types.MINUS}
  },
  addAsync() {
    return {type: types.ASYNC_ADD}
  }
}
export default actionCreators