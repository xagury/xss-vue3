<template>
  <div class="cart">
    <header>
      <div class="left">
        <Icon type="ios-arrow-back"/>
      </div>

      <h3>购物车</h3>
    </header>
    <Emptycart v-show="this.cars.length === 0"></Emptycart>
    <Shopcart v-show="this.cars.length !== 0" :cars="this.cars"></Shopcart>
  </div>
</template>

<script>
import { Icon } from "iview";
import Emptycart from "./components/Emptycart";
import Shopcart from "./components/Shopcart";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    Icon,
    Emptycart,
    Shopcart
  },
  computed: {
    ...mapState({
      cars: state => state.cars.cars
    })
    
  },
  methods: {

  },
  mouted(){
  
  }
};
</script>

<style scope lang='scss'>
.cart {
  background: #f4f4f4;
  height: 100%;
  padding-top: 0.44rem;
  header {
    width: 100%;
    position: fixed;
    top: 0;
    border-color: #b2b2b2;
    background-color: #f8f8f8;
    color: #444;
    height: 0.44rem;
    .left {
      width: 0.1rem;
      position: absolute;
      left: 0;
      font-size: 0.4rem;
    }
    h3 {
      line-height: 0.44rem;
      font-size: 0.16rem;
    }
  }
}
</style>
