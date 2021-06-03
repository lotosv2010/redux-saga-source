const actionTypes = {
  ADD: 'ADD',
  MINUS: 'MINUS',
  ASYNC_ADD: 'ASYNC_ADD'
}
/**
 * dispatch(ASYNC_ADD)派发给仓库
 * 仓库中的sagaMiddleware会拦截到这个命令，异步操作比如延时，再次派发一个ADD动作，修改状态
 */
export default actionTypes