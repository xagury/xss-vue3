<template>
  <div class="login">
    <header>
      <div class="top">
        <div class="left">
          <router-link
          to = '/'
          >
          <img src="/img/ic_back_white.png" alt>
          </router-link>
        </div>
        <!-- <span>顺逛用户登录</span> -->
        <div class="right">
          <router-link to="/register">注册</router-link>
        </div>
      </div>
      <div class="userIcon">
        <img src="/img/usericon.png" alt>
        <span>海尔官方社群交互平台</span>
      </div>
    </header>
    <main>
      <form>
        <input placeholder="请输入用户名" v-model="user.username"/>
        <input type="password" v-model="user.password" placeholder="请输入密码"/>
        <div class="forget">忘记密码?</div>
        <Button type="primary" @click.prevent="handlerLogin">登录</Button>
      </form>
    </main>
  </div>
</template>

<script>
import { Button } from "iview";
export default {
  name: "Login",
  components: { Button },
   data(){
    return {
      user:{
        username: '',
        password: ''
      },
    }
  },
  methods:{
    handlerLogin(){
 
      this.$store.dispatch('login',this.user,()=>{
      
      })
      .then(() => {
        
        this.$router.push('./mine')
      })
      .catch(err =>{
        
        console.log(err)
      })
    }
  }
};
</script>

<style scope lang='scss'>
.login {
  height: 100%;
  background: #fff;
  header {
    background-image: linear-gradient(0deg, #2979ff 8%, #295bff 98%);
    // box-shadow: 0 4px 20px 0;
    width: 100%;
    height: 1.8rem;
    padding: 0.1rem 0.1rem;
    background: -webkit-linear-gradient(90deg, #2979ff 8%, #295bff 98%);
    .top {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: space-between;
      padding: 0 0.1rem 0 0.1rem;
      .left {
        img {
          width: 0.3rem;
          height: 0.3rem;
        }
      }
      .right {
        a {
          color: #fff;
          font-size: 0.16rem;
          line-height: 0.3rem;
          text-align: center;
        }
      }
      span {
        font-size: 0.16rem;
        line-height: 0.3rem;
        text-align: center;
        color: #fff;
      }
    }
    .userIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70%;
      img {
        width: 0.56rem;
        height: 0.56rem;
        margin-right: 0.1rem;
        border-radius: 0.1rem;
      }
      span {
        text-align: left;
        font-size: 0.16rem;
        color: #fff;
      }
    }
  }
  main {
    padding: 0 0.2rem;
    form {
      input {
        border-bottom: 0.1px solid #e4e4e4;
        margin-bottom: 0.03rem;
        height: 0.56rem;
        width: 100%;
        font-size: 0.14rem;
        color: #333;
      }
      .forget {
        font-size: 14px;
        color: #666;
        margin: 0.22rem 0.02rem 0.32rem;
        text-align: left;
      }
      button {
        margin: 0.2rem 5%;
        width: 90%;
        background: #2979ff;
        box-shadow: 0 3px 6px 0 rgba(41, 121, 255, 0.5);
        border-radius: 100px;
        height: 0.44rem;
        color: #ffffff;
        text-align: center;
        line-height: 0.24rem;
        font-size: 0.16rem;
        font-weight: bold;
      }
    }
  }
}
</style>