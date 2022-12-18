import router from './index' // 引入路由文件
import store from '../store/index'

router.beforeEach((to,from, next) => {
  // 判断是否存有token
  if(!store.state.UserToken) {
    // 未登录的状态下进行判断是否需要登录,matched到的长度和遍历其中需要登录的属性
    if(to.matched.length > 0 && !to.matched.some(record => record.requiresAuth)) {
      next() // 不需要登录直接next
    }else {
      // 需要登录,进入login页面
      next({
        path: "/login"
      })
    }
  } else { // 已经登录的状态下权限不同
    // 路由权限的业务：1.定义好全部的路由地址
    //               2.通过用户不同向前后台请求不同的用户权限数据
    //               3.对用户权限做对比：请求数据 == 全部的路由 对上的取出来作为路由配置，对不上的就不用
    if(!store.state.permission.permissionList) { // 没有返回值
      store.dispatch("permission/FETCH_PERMISSION").then(() => {
        next({
          path:to.path
        })
      })
    } else {// store存在权限
      if (to.path!== "/login") {
        next()
      } else {
        next(from.fullPath)
      }
    }
  }
})
