import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './saga'

// sagaMiddleware 会监听动作，如果是一个saga动作的话，就会转发给saga处理
const sagaMiddleware = createSagaMiddleware()
const store = applyMiddleware(sagaMiddleware)(createStore)(reducer)

// todo 实现 sagaMiddleware.run
// function run(rootSaga) {
//   const it = rootSaga()
//   it.next()
// }
// run(rootSaga)

sagaMiddleware.run(rootSaga)
export default store