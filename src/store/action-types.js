const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST', // 发起登录请求
  LOGIN_SUCCESS: 'LOGIN_SUCCESS', // 登录成功
  SET_USERNAME: 'SET_USERNAME', // 登录成功之后把用户名设置到localStorage
  LOGIN_ERROR: 'LOGIN_ERROR', // 登录失败
  LOGOUT: 'LOGOUT' // 退出
}
/**
 * dispatch(ASYNC_ADD)派发给仓库
 * 仓库中的sagaMiddleware会拦截到这个命令，异步操作比如延时，再次派发一个ADD动作，修改状态
 */
export default actionTypes