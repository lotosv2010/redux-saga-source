const Api = {
  login(username, password) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve(`${username}-${password}`):reject('登录失败')
      }, 1000)
    })
  }
}
export default Api