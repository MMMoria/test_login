import axios from "../utils/http"
import store from "../store" // user的存在store中

export function fetchPermission(){
  return axios.get("/api/permission?user=" + store.state.UserToken);
}

export function login(user){
  return axios.get("/api/login?user=" + user)
}
