<template>
  <div>
    <div class="app-container">
      <div class="app-wrap">
          <div class="header">
            <h1>后台管理系统</h1>
          </div>
        <div class="content">
          <div>
            <el-form ref="loginform" :model="loginform" label-width="80px" label-position="left">
              <el-form-item label="选择用户" prop="user">
                <el-select v-model="loginform.user" style="width: 300px" placeholder="请选择用户">
                  <el-option label="系统管理员" value="admin"></el-option>
                  <el-option label="业务管理员" value="common"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="账号" prop="account">
                <el-input type="text" style="width: 300px" v-model.trim="loginform.account" @keyup.enter="login" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" style="width: 300px" v-model.trim="loginform.pass" @keyup.enter="login" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="footer">
          <p>版权所有：开心测试有限公司</p>
          <p>电话：1001100236</p>
        </div>
      </div>
    </div>
<!--    <div class="app-wrap">
      <div v-for="(item, index) in testdata" class="box">
        <span>{{item.name}}</span>
      </div>
    </div>-->
  </div>
</template>

<script type="text/javascript">
import {login} from "../../api"
export default{
  components: {
  },
  data () {
    return {
      loginform: {
        user: '',
        account: '',
        pass: ''
      },
      testdata: [
        {
          name: 1
        },
        {
          name: 2
        },
        {
          name: 3
        },
        {
          name: 3
        },
        {
          name: 3
        }
      ]


    }
  },
  methods: {
    async login() {
      let data = await login(this.loginform.account)
      let token = data.token
      this.$store.commit('LOGIN_IN',token)
      this.$router.replace('/')
      console.log(data)
    }
  }
}
</script>

<style scoped lang="scss">
.app-container {
  padding: 0;
  .app-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .header {
      margin-top: 5%;
    }
    .content {
      width: 600px;
      height: 300px;
      background: #e4e4e49e;
      > div:nth-child(1) {
        padding: 20px;
      }
    }
  }
}
.app-wrap1 {
  padding: 100px;
  width: 1000px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  //flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: space-around;
  flex: 1 2 100%;
  .box {
    width: 400px;
    height: 80px;
    border: 1px solid red;
    //padding: 10px;
  }
}
</style>
