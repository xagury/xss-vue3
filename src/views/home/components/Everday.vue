<template>
  <div class="Everday">
    <h3 class="title">
      <img class="icon" src="https://cdn09.ehaier.com/shunguang/H5/www/img/newvision/mrss.png" alt>
      <span>每日上新</span>
      <a href="#" class="more">
        新品 用心 | 更多
        <img src="https://cdn09.ehaier.com/shunguang/H5/www/img/newvision/more.png" alt>
      </a>
    </h3>
    <main>
      <div class="wrap">
        <div class="content-box1">
          <div class="content-box" v-for="item in home.newProductsVo" :key="item.id">
            <div class="content">
              <img class="p-img" :src="item.imgUrl" alt>
              <span class="p-name" :data-id="item.productId">{{item.productFullName}}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: "Everday",
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState({
      home: state => state.home.home
    })
  },
  mounted() {
    this.$store.dispatch("getHome");

  }
};
</script>
<style scope lang='scss'>
.Everday {
  width: 100%;
  background: #fff;
  margin-top: 0.05rem;
  padding-bottom: 0.133333rem;
  position: relative;
  .title {
    overflow: hidden;
    margin: 0.1rem;
  
    border-bottom: 1px solid #eaeaea;
    .icon {
      width: 0.17rem;
      height: 0.17rem;
      display: block;
      float: left;
      margin-top: 0.11rem;
      margin-left: 0.1rem;
      margin-right: 0.1rem;
    }
    span {
      font-size: 0.16rem;
      line-height: 0.4rem;
      display: block;
      float: left;
      font-weight: 900;
    }
    a {
      float: right;
      display: block;
      line-height: 0.35rem;
      position: relative;
      padding-right: 0.1rem;

      img {
        position: absolute;
        display: block;
        right: 0;
        top: -0.01rem;
        width: 0.16rem;
        height: 0.16rem;
        margin-top: 0.1rem;
      }
    }
  }
  .wrap {
    overflow: scroll;
    padding:.1rem;
    .content-box1 {
      width: 1200%;
       .content-box {
 
    
      .content {
        box-shadow: rgb(238, 238, 238) 1px 2px 2px 1px;
   width: 2.15rem;
    transition-duration: 0ms;
    transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg);
        float:left;
        width: 2.15rem;
        height: 2.4rem;
        .p-img {
          width: 2.05rem;
          height: 2.05rem;
          display: block;
          margin: 0 auto;
        }
        .p-name {
          padding-left: 5px;
          width: 2rem;
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    }
   
  }
}
</style>
