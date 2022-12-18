// 路由的权限，比对的操作
// 先引入接口，拿到后端返回的数据
import { fetchPermission } from "../../api/index"
import router,{ DynamicRoutes } from "../../router/index" // 引入默认路由
import dynamicRouter from "../../router/dynamic-router" // 引入全部路由
import { recursionRouter,setDefaultRoute } from "../../utils/recursion-router"  // 引入比对路由

export default {
    namespaced:true, // 指定范围，不能全局访问
    state:{
        permissionList:null, // 所有路由权限
        sidebarMenu:[],// 导航菜单
        currentMenu:'' // 当前路由，高亮
    },
    getters:{},
    mutations:{
      // 设置权限的操作，routes为最终权限，将最终权限给permission
        SET_PERMISSION(state,routes){
            state.permissionList = routes;
        },
      // 清理权限
        CLEAR_PERMSSION(state){
            state.permissionList = null;
        },
      // 设置菜单
        SET_MENU(state,menu){
            state.sidebarMenu = menu;
        },
      // 清理菜单
        CLEAR_MENU(state){
            state.sidebarMenu = []
        }
    },
  // 异步访问放在actions
    actions:{
      // 需要两个参数，一个是commit的提交对象，一个state传递参数
        async FETCH_PERMISSION({ commit,state }){
            let permissionList = await fetchPermission() // 调接口，拿到数据
          // 根据路由权限筛选，调用上方的recursionRouter方法，
          // dynamicRoutes是全部路由，permissionList通过接口拿到后端返回的路由
          // routes是比对之后筛选出来的路由信息
            let routes = recursionRouter(permissionList,dynamicRouter)
          //把符合条件的数据添加到index.js里面的DynamicRoutes里面
          // 判断是否等于空，如果等于空，添加为子元素，dynamicroutes里面的就是空，网laylout里面添加路由信息
            let MainContainer = DynamicRoutes.find(v => v.path === "")
            let children = MainContainer.children
            children.push(...routes)
            // 生成菜单，调用mutations里面的方法
            commit("SET_MENU",children)
            // 设置默认路由
            setDefaultRoute([MainContainer])
            // 初始化路由
            let initialRoutes = router.options.routes
            router.addRoutes(DynamicRoutes) // 添加路由信息
          // 改变state中的路由状态，将初始化路由信息和最终的路由信息放到里面
            commit("SET_PERMISSION",[ ...initialRoutes , ...DynamicRoutes])
        }
    }
}
