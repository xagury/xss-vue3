<template>
  <div class="Countdown">
    <h3 class="title">
      <img class="icon" src="https://cdn09.ehaier.com/shunguang/H5/www/img/newvision/xsqg.png" alt>
      <span>限时抢购</span>
      <a href="#" class="more">
        更多
        <img src="https://cdn09.ehaier.com/shunguang/H5/www/img/newvision/more.png" alt>
      </a>
    </h3>
    <main>
      <!-- <nav>
        <ul>
          <li v-for="item in countdown" :key="item.flashSaleId">
            <a href="#" class="countName">{{item.timeStr}}</a>
          </li>
        </ul>
      </nav>-->
      <Tabs size="small">
        <TabPane v-for="item in countdown" :key="item.flashSaleId" :label="item.timeStr">
          <div class="content-box">
            <div class="scroll-box">
              <div class="content" v-for="item1 in item.products" :key="item1.productId">
                <div class="p-img">
                  <img :src="item1.imageUrl" alt>
                </div>
                <div class="p-name">{{item1.productName}}</div>
                <div class="p-price">￥{{item1.miniPrice}}</div>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </main>
  </div>
</template>

<script>
import { Tabs, TabPane } from "iview";
import { mapState } from "vuex";

export default {
  name: "Countdown",
  data() {
    return {
      value2: 0
    };
  },
  components: { Tabs, TabPane },
  computed: {
    ...mapState({
      countdown: state => state.home.countdown
    })
  },
  mounted() {
    this.$store.dispatch("getCountdown");
  }
};
</script>
<style scope lang='scss'>
.Countdown {
  width: 100%;
  background: #fff;
  margin-top: 0.05rem;
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
  main {
    padding: 0 0.1rem .1rem;
    .content-box {
      overflow: scroll;
      .scroll-box {
        width: 350%;
        white-space: nowrap;

        .content {
          margin-right: 0.1rem;
          float: left;
          width: 1.02rem;
          height: 1.46rem;
          .p-img {
            width: 1.01rem;
            height: 1.01rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .p-name {
            line-height: 0.24rem;
            font-size: 0.12rem;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .p-price {
            font-size: 0.12rem;
            color: #f40;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
