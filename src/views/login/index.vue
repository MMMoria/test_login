<template>
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
  <div class="clearfix" id="login_wrap">
    <h2 class="title">登录页</h2>
    <div id="login">
      <div class="login--account">
        <span>账号：</span>
        <input type="text" placeholder="随便输" name="account" v-model.trim="account" />
      </div>
      <div class="login--password">
        <span>密码：</span>
        <input
          type="password"
          placeholder="随便输"
          name="password"
          v-model.trim="password"
          @keyup.enter="login"
        />
      </div>
      <p class="login--btn">
        <button id="loginBtn" @click="login">登录</button>
      </p>
    </div>
  </div>
</template>

<script>

import { login } from "../../api"

export default {
  data() {
    return {
      loginform: {
        user: '',
        account: '',
        pass: ''
      },
      account: "",
      password: ""
    };
  },
  methods: {
    async login() {
        // 网络请求
      let data = await login(this.loginform.account)
        // let data = await login(this.account);
      let token = data.token
      // 本地vuex
      this.$store.commit('LOGIN_IN',token)
      this.$router.replace("/")
    }
  },
  mounted() {}
};
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
.title {
  text-align: center;
  font-size: 22px;
  padding-top: 100px;
}
#login_wrap {
  position: relative;
  background: rgba(64, 64, 194, 0.1);
  > div {
    background: #fff;
    width: 479px;
    height: 325px;
    padding: 30px 40px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    > div {
      padding: 10px 0;
      border-bottom: 1px solid #ddd;
      &.login--account {
        margin: 25px 0 30px;
      }
      span {
        color: #666;
        display: inline-block;
        width: 84px;
        font-size: 20px;
      }
      input {
        background: none;
        font-size: 16px;
        border: none;
        height: 30px;
        width: 280px;
        padding-left: 12px;
        box-sizing: border-box;
        color: #666;
        &.error {
          border: 1px solid #f00;
        }
        &::-webkit-input-placeholder {
          color: #aaa;
        }
      }
    }

    p {
      text-align: right;
      &.login--btn {
        button {
          width: 100%;
          height: 50px;
          font-size: 18px;
          background: #0f6171;
          border: none;
          margin-top: 30px;
          color: #fff;
          border-radius: 6px;
          cursor: pointer;
        }
      }
      a {
        color: #fff;
        display: inline-block;
        padding: 0 15px;
        font-size: 14px;
      }
    }
  }
}
</style>
