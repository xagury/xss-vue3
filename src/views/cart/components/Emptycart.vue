<template>
  <div class="emptycart">
  <div class='p-img'>
    <img src="https://cdn09.ehaier.com/shunguang/H5/www/img/basket.png" alt="">
  </div>
<div class='p-toast'>
  <p>您的购物车暂无商品</p>
  <a href="/">马上去挑选您钟情的商品吧</a>
</div>
  </div>
</template>

<script>


export default {
  name: 'Emptycart',
  components: {
    
  }
}
</script>

<style scope lang='scss'>
.emptycart{
  .p-img{
    
  }
  .p-toast{
   p{
     margin-top:-.3rem;
     font-weight: 900;
     line-height:.2rem;
   }
   a{
     display: block;
     color:#333;
   }
  }
}

</style>