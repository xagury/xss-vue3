<template>
  <div class="cart">
  <header>
    
    <div class='left'>
     <Icon type="ios-arrow-back" />
    </div>
    
    <h3>购物车</h3>

  </header>
  <!-- <Emptycart v-if = '!cars'></Emptycart> -->
  <Shopcart v-if = '!cars'></Shopcart>  


  </div>
</template>

<script>

import {Icon} from 'iview'
import Emptycart from './components/Emptycart'
import Shopcart from './components/Shopcart'
export default {
  name: 'Cart',
  components: {
    Icon,Emptycart,Shopcart
  }
}
</script>

<style scope lang='scss'>
.cart{
  background:#f4f4f4;
  height:100%;
  padding-top:.44rem;
  header{
    width:100%;
    position:fixed;
    top:0;
    border-color: #b2b2b2;
    background-color: #f8f8f8;
    color: #444;
    height:.44rem;
    .left{
      width:.1rem;
      position: absolute;
      left:0;
      font-size:.4rem;
    }
    h3{
      line-height:.44rem;
      font-size:.16rem;
    }
    
  }
}

</style>
