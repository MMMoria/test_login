/**
 * 方法一：比对路有权限，后台返回的和前台对比，哪个符合哪个拿出来
 * 方法二：指定返回的默认路由，哪些应该是默认显示的
 */
/***
 *
 * @param {array} userRouter 后台返回的路由权限json
 * @param {array} alRouter 前端配置好的路由权限数据
 * @returns {*[]} realRoutes 过滤之后符合条件的路由
 */
export function recursionRouter(userRouter = [], alRouter = []) {
  var realRoutes = []
  alRouter.forEach((v,i) => {
    userRouter.forEach((item, index) => {
      if(item.name == v.meta.name) {
        if(item.children && item.children.length > 0) { // 先判断返回的json数据中是否有children
          v.children = recursionRouter(item.children, v.children) // 如果有children，继续进行递归判断
        }
        realRoutes.push(v) // 添加比对后的路由信息
      }
    })
  })
  return realRoutes // 返回需要的真正路由信息
}
// 设置默认的路由
export function setDefaultRoute(routes) {
  routes.forEach((v, i) => {
    if(v.children && v.children.length > 0) {
      v.redirect = {name: v.chilren[0].name}
      setDefaultRoute(v.children)
    }
  })
}
