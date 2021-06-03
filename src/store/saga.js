import { all, takeEvery, delay, put } from 'redux-saga/effects'
import types from './action-types'

// todo:实现delay
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * todo:worker saga
 */
function * addAsync() {
  console.log('worker saga:', 'addAsync')
  yield delay(2000) // 延迟2秒，delay会返回一个promise,执行器会等待promise完成后继续执行
  let data = {}
  yield fetch('/manifest.json')
    .then(res => res.json())
    .then(json => {
      console.dir(json)
      data = json
    })
  yield put({type: types.ADD, payload: data}) // put 作用是告诉middleware派发一个动作
}

/**
 * watcher saga
 */
function * helloSaga() {
  console.log('watcher saga:','helloSaga')
  yield true
}

/**
 * todo:watcher saga
 */
function * watchAsyncAdd() {
  console.log('watcher saga:','watchAsyncAdd')
  // 监听每一个 ASYNC_ADD动作，当这个动作发生的时候，执行启动addAsync这个saga的执行
  yield takeEvery(types.ASYNC_ADD, addAsync)
}

/**
 * todo:入口saga
 */
export function * rootSaga() {
  console.log('root saga:','rootSaga start')
  // yield
  yield all([helloSaga(), watchAsyncAdd()])
  console.log('root saga:','rootSaga end')
}