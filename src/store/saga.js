import { all, put, call, take, fork, cancel } from 'redux-saga/effects'
import types from './action-types'
import Api from '../Api'

/**
 * todo:worker saga
 */
function * login({username, password}) {
  try {
    const token = yield call(Api.login, username, password)
    yield put({type: types.SET_USERNAME, payload: {username}})
    return token
  } catch (error) {
    yield put({type: types.LOGIN_ERROR, payload: {error}})
  }
}

/**
 * todo:watcher saga
 */
// sage的优点，业务描述比较清晰
function * loginFlow() {
  while(true) {
    const {payload} = yield take(types.LOGIN_REQUEST)
    // todo: fork 开启一个新的子进程，不阻止当前saga执行，返回当前任务
    const task = yield fork(login, payload)
    console.log(task)
    const action = yield take([types.LOGOUT, types.LOGIN_ERROR]) // 等待退出
    if(action.type === types.LOGOUT) {
      yield cancel(task) // 取消task任务
    } 
    yield put({type: types.SET_USERNAME, payload: {username: null}})
  }
}

/**
 * todo:入口saga
 */
export function * rootSaga() {
  console.log('root saga:','rootSaga start')
  // yield
  yield all([loginFlow()])
  console.log('root saga:','rootSaga end')
}