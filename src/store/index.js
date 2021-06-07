import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './saga'

// sagaMiddleware 会监听动作，如果是一个saga动作的话，就会转发给saga处理
const sagaMiddleware = createSagaMiddleware()
const store = applyMiddleware(sagaMiddleware)(createStore)(reducer)

sagaMiddleware.run(rootSaga)
export default store