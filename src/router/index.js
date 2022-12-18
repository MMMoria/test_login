import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/login"
import Home from "../views/home"
import NotFound from "../views/errorPage/404"
import Forbidden from "../views/errorPage/403"
import Layout from "../views/layout"
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
 * 根据用户的权限不同，所能看到的页面和可操作性也不同
 *  admin -> 所有页面都可以看得到
 *  vip -> 属于vip的权限
 *  svip -> 更多额vip的权限
 *
 * addRouter()
 */
// 准备动态加载的路由
export const DynamicRoutes = [
    {
        path:"",
        component:Layout, //加载的根目录，什么都不显示作为容器页面
        name:'container', // 名字叫
        redirect:"home", // 重定向
        meta:{
            requiresAuth:true, // 是否需要登录才能进入，增加该属性
            name:"首页"
        },
        children:[
            {
                path:"home", // 这里不用加/
                component:Home,
                name:"home",
                meta:{
                    // 匹配规则
                    name:"首页",
                    icon:"icon-name"
                }
            }
        ]
    },
    {
        path:"/403",
        component:Forbidden
    },
    {
        path:"*",
        component:NotFound
    }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
