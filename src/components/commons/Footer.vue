<template lang = 'html'>
  <div class ='footer-box'>

  <wv-tabbar fixed>
    <wv-tabbar-item to="/" is-on >
      <span slot="icon" style="display: inline-block; position: relative;">
        <img class="weui-tabbar__icon" src="/img/home.png" slot="icon" >
         <img class="weui-tabbar__icon" src="/img/homes.png" slot="icon" v-if = "!flag">
        <!-- <wv-badge style="position: absolute;top: -2px;right: -13px;">8</wv-badge> -->
      </span>
       首页
    </wv-tabbar-item>
    <wv-tabbar-item to="/category">
      <img class="weui-tabbar__icon" src="/img/car.png" slot="icon" v-if = "!flag">
       <img class="weui-tabbar__icon" src="/img/cars.png" slot="icon" >
       分类
    </wv-tabbar-item>
    <wv-tabbar-item to="/cart">
      <span slot="icon" style="display: inline-block; position: relative;">
        <img class="weui-tabbar__icon" src="/img/guang.png" slot="icon" v-if = "!flag">
        <img class="weui-tabbar__icon" src="/img/guangs.png" slot="icon" >
        <!-- <wv-badge is-dot style="position: absolute;top: 0;right: -6px;">8</wv-badge> -->
      </span>
       购物车
    </wv-tabbar-item>
    <wv-tabbar-item to="/mine">
      <img class="weui-tabbar__icon" src="/img/Mine.png" slot="icon" v-if = "!flag">
       <img class="weui-tabbar__icon" src="/img/Mines.png" slot="icon">
       我的
    </wv-tabbar-item>
  </wv-tabbar>

  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem, } from 'we-vue'

Vue.use(Tabbar).use(TabbarItem)

export default {
  name: 'Footer',
  data(){
    return{
      msg: 'Footer',
      flag:true
    }
  },
  components: {
    Tabbar,TabbarItem
  }
}
</script>
<style scoped lang = 'scss'>
/deep/ .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
      color: #2577e3;
}
</style>



