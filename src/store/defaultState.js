// 默认状态
export default {
  get UserToken() { // 读取token
    return localStorage.getItem('token')  //  localStorage.getItem(key):获取指定key 本地存储数据的值。
  },
  set UserToken(value) { // 设置token
    localStorage.setItem('token', value) // localStorage.setItem(key,value)：将value存储到key字段
  }
}
