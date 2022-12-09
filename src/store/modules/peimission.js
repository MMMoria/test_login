// 路由的权限，比对的操作
// 先引入接口，拿到后端返回的数据
import {fetchPermission} from "@/api";
import router, {DynamicRoutes} from "@/router"; // 引入默认路由
import dynamicRoutes from "@/router/dynamic-router"; // 引入全部路由
import {recursionRouter,setDefaultRoute} from "@/utils/recursion-router";  // 引入比对路由

export default {
  namespace: true, // 指定范围，不能全局访问
  state: {
    permissionList: null, // 所有路由权限
    sidebarMenu: [], // 导航菜单
    currentMenu: '', // 当前路由，高亮
  },
  getters: {},
  mutations: {
    // 设置权限的操作，routes为最终权限，将最终权限给permission
    SET_PERMISSION(state, routes) {
      state.permissionList = routes
    },
    // 清理权限
    CLEAR_PERMISSION(state) {
      state.permissionList = null
    },
    // 设置菜单
    SET_MENU(state, menu) {
      state.sidebarMenu = menu
    },
    // 清理菜单
    CLEAR_MENU(state, menu) {
      state.sidebaeMenu = []
    }
  },
  // 异步访问放在actions
  actions: {
    // 需要两个参数，一个是commit的提交对象，一个state传递参数
    async FETCH_PEMISSION({ commit, state }) {
      let permissionList = await fetchPermission() // 调接口，拿到数据
      console.log(permissionList)

    }
  }
}

