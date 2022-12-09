import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/login"
import Home from "@/views/home"
import Notfound from "@/views/errorPages/404"
import Forbidden from "@/views/errorPages/403"
import Layout from "@/views/layout"; // 关键引入
// 通过vue.use（插件），使用插件
Vue.use(VueRouter)
// 创建vuerouter对象
// 初始化路由
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]
/**
 * 根据用户的权限不同，所能看到的页面是不同的，根据不同用户展示不同页面=>动态路由
 * 使用addRouter()
 */
export const DynamicRoutes = [
  {
    path: "",
    component: Layout, //加载的根目录
    name: 'container', // 名字叫
    redirect: "home", // 重定向
    meta: {
      requireAuth: true, // 需要登录才能进入
      name: "首页"
    },
    children: [
      {
        path: "home", // 这里不用加/
        component: Home,
        name: "home",
        meta: {
          // 匹配规则
          name: "首页",
          icon: "icon-name"
        }
      }
    ]
  },
  {
    path: "/403",
    component: Forbidden,
    name: "403"
  },
  {
    path: "/404",
    component: Notfound,
    name: "404"
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
