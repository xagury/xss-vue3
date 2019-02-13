<template>
  <div class="Merchant">
   <div class='title'>
     <img :src="shops.avatarImageFileId" alt="">
     <h5>{{shops.o2OStoreName}}</h5>
   </div>
   <div class='store'>
     <span>商品描述 {{shops.productGrade}} 低</span>
     <span>卖家服务 {{shops.serviceGrade}} 高</span>
     <span>物流服务 {{shops.logisticalGrade}} 低</span>
   </div>
   <a href="#" class='btn'>进店逛逛</a>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Merchant",
  props:["shops"],
  data() {
    return {

    };
  },
  components: {},
 computed: {
    ...mapState({
      merchant: state => state.detail.merchant
    })
  },
  mounted() {
    this.$store.dispatch("getMerchant");
    
  }
};
</script>
<style scope lang='scss'>
.Merchant {

 margin:.06rem 0;
 padding:.23rem .2rem;
 background:#fff;
 .title{
   display: flex;
   justify-content: space-around;align-items: center;
   color:#333;
   img{
width:.48rem;
height:.48rem;
margin-right:.1rem;
border-radius: 50%;
   }
   h5{
     text-align: left;margin-left:-1.4rem;
     font-size:.18rem;
     
   }
 }
 .store{
   margin:.2rem 0;
   text-align: center;
   span{
     color:#999;
     margin-right:.2rem;
   }
 }
 .btn{
   margin-right: .1rem;
    width: .8rem;
    height: .26rem;
    border-radius:.13rem;
    border: 1px solid #EF2765;
    color: #EF2765;
    text-align: center;
    line-height: .26rem;
    display: block;
    margin:0 auto;
 }
}
</style>
