import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions/login'

export const Login = (props) => {
  console.log('login props', props)
  const nameRef = useRef()
  const [password, setPassword] = useState('')
  const {username, login, logout} = props

  const pwdChange = ({target: {value}}) => {
    setPassword(value)
  }
  const handleLogin = (event) => {
    event.preventDefault();
    const {value: name} = nameRef.current
    console.log(name, password)
    login(name, password)
  }
  const handleLogout = () => {
    logout()
  }
  const LoginForm = (
    <form>
      <p><label>用户名：</label><input ref={nameRef} /></p>
      <p><label>密 码：</label><input type='password' defaultValue={password} onChange={pwdChange} /></p>
      <p><button onClick={handleLogin}>登录</button></p>
    </form>
  )
  const LogoutForm = (
    <div>
      当前登录用户为：{username}
      <p><button onClick={handleLogout}>退出</button></p>
    </div>
  )
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Login</h1>
      {
        username?LogoutForm : LoginForm
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
