<template lang = 'html'>
  <div class ='footer-box'>
    <div class='footerNav'>
        <router-link 
        v-for ='item in nav'
        :key = 'item.id' 
        :to = 'item.url'
        >
         
          <span>{{item.name}}</span>
        </router-link>
      
      
    </div>
    
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "Footer",
  data() {
    return {
      msg: "Footer",
      flag: true,
      nav: [
        {
          id: 1,
          name: "首页",
          url: "/",
          img: "img/homes.png"
        },
        {
          id: 2,
          name: "分类",
          url: "/category",
          img: "img/guangs.png"
        },
        {
          id: 3,
          name: "购物车",
          url: "/cart",
          img: "img/cars.png"
        },
        {
          id: 4,
          name: "我的",
          url: "/mine",
          img: "img/Mines.png"
        }
      ]
    };
  },
  components: {}
};
</script>
<style scoped lang = 'scss'>
.footer-box {
  position: fixed;
  height: 0.47rem;
  bottom: 0;
  width: 100%;
  background: #fff;
  .footerNav {
    display: flex;
    justify-content: space-around;
    a {
      display: block;
      width: 0.93rem;
      height:.46rem;
      background:url('/img/homes.png') no-repeat center .01rem;
      background-size:.32rem .32rem;
      color: #2577e3;
      span {
        display: block;
        color: gray;
        font-size: 0.12rem;
        margin-top:.32rem;
      }
      &.router-link-exact-active {
        color: #2577e3;
        background:url('/img/home.png') no-repeat center .01rem;
        background-size:.32rem .32rem;
        span{
          color: #2577e3;
        }
      }
    }
    a:nth-child(2){
       background:url('/img/guangs.png') no-repeat center .01rem;
      background-size:.32rem .32rem;
      &.router-link-exact-active {
        color: #2577e3;
        background:url('/img/guang.png') no-repeat center .01rem;
        background-size:.32rem .32rem;
        span{
          color: #2577e3;
        }
      }
    }
    a:nth-child(3){
       background:url('/img/cars.png') no-repeat center .01rem;
      background-size:.32rem .32rem;
      &.router-link-exact-active {
        color: #2577e3;
        background:url('/img/car.png') no-repeat center .01rem;
        background-size:.32rem .32rem;
        span{
          color: #2577e3;
        }
      }
    }
    a:nth-child(4){
       background:url('/img/Mines.png') no-repeat center .01rem;
      background-size:.32rem .32rem;
      &.router-link-exact-active {
        color: #2577e3;
        background:url('/img/Mine.png') no-repeat center .01rem;
        background-size:.32rem .32rem;
        span{
          color: #2577e3;
        }
      }
    }
  }
}
</style>



