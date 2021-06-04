import { all, takeEvery, delay, put, cps, call, apply } from 'redux-saga/effects'
import types from './action-types'
import {readFile, delayPromise} from '../utils'

// todo:实现delay
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * todo:worker saga
 */
function * addAsync() {
  console.log('worker saga:', 'addAsync')
  // todo: cps
  yield cps(readFile, ['manifest.json']) // 告诉中间件调用node风格的回调函数
  // todo: call
  try {
    const {data} = yield call(delayPromise, [1000]) // 以1000为参数继续调用delayPromise方法，一定返回一个promise，等promise完成才会继续执行
    console.log(data.name)
  } catch (e) {
    const {message} = e
    console.error(message)
  }
  // todo: apply
  try {
    const {data} = yield apply({name: 'test'}, delayPromise, [1000])
    console.log(data.name)
  } catch (e) {
    const {message} = e
    console.error(message)
  }
  // todo: delay
  yield delay(2000) // 延迟2秒，delay会返回一个promise,执行器会等待promise完成后继续执行
  // todo: api请求
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
  // todo: 问题，永远不会结束
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