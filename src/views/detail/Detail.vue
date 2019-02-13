<template>
  <div class="detail">
    <header>
      <div class="left">
        <a href="/">
        
        <Icon type="ios-arrow-back"/>
        </a>
      </div>

      <h3>商品详情</h3>
    </header>
    <main>
      <Banner :banners="detail.swiperImgs"></Banner>

      <div class="Shopdesc">
        <div class="shopName">
          <p class="price">
            ￥
            <span>{{product.pcPrice}}</span>
          </p>
          <p class="name">{{product.productFullName}}</p>
          <p class="title">{{product.productTitle}}</p>
        </div>
      </div>
      <div class="tip">
        <h4>商家备注</h4>
        <div class="content">{{merchant.giftInfo}}</div>
      </div>
      <div class="select">
        已选 "
        <span class="ml">{{product.productName}}</span> "
      </div>
      <div class="address">
        送至:
        <span>{{detail.pcrName}}</span>
      </div>
      <div class="trans">
        <div class="top">
          <span class="bg">有货</span>
          <span class="ps">{{merchant.expectTime}}</span>
        </div>
        <div class="bottom">运费: 包邮</div>
      </div>
      <div class="bar">[白条支付]查看更多</div>
      <Merchant :merchant="merchant" :shops="shops"></Merchant>
      <CellGroup>
        <Cell title="图文详情" to="#"/>
        <Cell title="规格参数" to="#"/>
        <Cell title="商品评价" extra="1条评价,好评率100%" to="#"/>
      </CellGroup>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import { Icon, Cell, CellGroup } from "iview";
import { mapState } from "vuex";
import Banner from "./components/Banner";
import Merchant from "./components/Merchant";
import Footer from './components/Footer'
export default {
  name: "Detail",
  components: {
    Icon,
    Banner,
    Merchant,
    Cell,
    CellGroup,
    Footer
  },
  computed: {
    ...mapState({
      detail: state => state.detail.detail,
      merchant: state => state.detail.merchant,
      product: state => state.detail.product,
      shops: state => state.detail.shops
    })
  },
  mounted() {
    this.$store.dispatch("getMerchant");
    this.$store.dispatch("getDetail");
    this.$store.dispatch("getProduct");
    this.$store.dispatch("getShops");
  }
};
</script>

<style scope lang='scss'>
.detail {
  background: #f4f4f4;
  height: 100%;
  padding-top: 0.44rem;
  padding-bottom: 0.46rem;
  overflow: scroll;
  header {
    width: 100%;
    position: fixed;
    top: 0;
    border-color: #b2b2b2;
    background-color: #fff;
    border-bottom: 1px solid #dddddd;
    color: #444;
    height: 0.44rem;
    .left {
      width: 0.1rem;
      position: absolute;
      left: 0;
      font-size: 0.3rem;
      line-height: 0.4rem;
      color: #999;
      a{
        color: #999;
      }
      
    }
    h3 {
      line-height: 0.44rem;
      font-size: 0.2rem;
      color: #000;
    }
  }
  main {
    text-align: left;
    .Shopdesc {
      .shopName {
        background: #fff;
        width: 100%;
        padding: 0.1rem;
        text-align: left;
        .price {
          padding: 0.05rem 0 0.05rem 0.05rem;
          font-size: 14px;
          color: #ef2765;
          margin-top: 4px;
          span {
            font-size: 24px;
            color: #ff6026;
          }
        }
        .name {
          padding-left: 0.05rem;
          color: #333;
          font-size: 0.18rem;
          line-height: 0.3rem;
          font-weight: 900;
        }
        .title {
          padding-left: 0.05rem;
          line-height: 0.2rem;
          font-size: 0.14rem;
          color: #888;
        }
      }
      .tip {
        background: #fff;
        margin-top: 0.05rem;
        text-align: left;
        h4 {
          color: #333;
          line-height: 0.3rem;
          font-size: 0.12rem;
          padding: 0 0.1rem;
        }
        .content {
          padding: 0rem 0 0.1rem 0.1rem;
        }
      }
      .select {
        margin-top: 0.05rem;
        background: #fff;
        padding: 0.2rem 0.1rem;
        text-align: left;
      }
    }
    .tip {
      background: #fff;
      margin-top: 0.05rem;
      text-align: left;
      h4 {
        color: #333;
        line-height: 0.3rem;
        font-size: 0.12rem;
        padding: 0 0.1rem;
      }
      .content {
        padding: 0rem 0 0.1rem 0.1rem;
      }
    }
    .select {
      margin-top: 0.05rem;
      background: #fff;
      padding: 0.2rem 0.1rem;
      text-align: left;
    }
    .address {
      background: #fff;
      margin-top: 0.02rem;
      padding: 0.2rem 0.1rem;
    }
    .trans {
      background: #fff;
      color: #333;
      padding: 0 0.1rem 0.1rem 0.1rem;

      .top {
        margin-bottom: 0.1rem;
        .bg {
          color: #ff6026;
          margin-right: 0.1rem;
        }
      }
    }
    .bar {
      background: #fff;
      margin-top: 0.02rem;
      padding: 0.15rem 0.1rem;
      color: #333;
    }
    /deep/ .ivu-cell-group {
      background: #fff;
    }
  }
  footer{
    position:fixed;
    bottom:0;
    z-index:100001;
    width:100%;
  }
}
</style>