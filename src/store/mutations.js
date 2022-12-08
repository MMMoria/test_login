export default {
  LOGIN_IN(state,token) {
    state.UserToken = token // 既可以写入到account中，也可以通过get方法写入到本地
  },
  LOGIN_OUT(state) {
    state.UserToken = ""
}
}
