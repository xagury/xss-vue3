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
      <div class="Footer">
        <div class="iconBtn">
          <div class="btnicon kf">
            <img src="/img/ic_kf.png">
            <span>客服</span>
          </div>
          <div class="btnicon carIcon">
            <router-link
            to = '/cart'
            >

            
            <Badge :count="total.num" type="error">
              <img src="/img/car2x.png">
              <span>购物车</span>
            </Badge>
            </router-link>
          </div>
          <div class="btnicon like">
            <img src="/img/shoucang@2x.png">
            <span>收藏</span>
          </div>
        </div>
        <div class="btn">
          <div class="divbtn join" @click="addCar(product)">加入购物车</div>
          <div class="divbtn buy" >立即购买</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { Icon, Cell, CellGroup, Badge } from "iview";
import { mapState,mapActions,mapGetters } from "vuex";
import Banner from "./components/Banner";
import Merchant from "./components/Merchant";

export default {
  name: "Detail",
  components: {
    Icon,
    Banner,
    Merchant,
    Cell,
    CellGroup,
    Badge
  },
  computed: {
    ...mapState({
      detail: state => state.detail.detail,
      merchant: state => state.detail.merchant,
      product: state => state.detail.product,
      shops: state => state.detail.shops
    }),
     ...mapGetters(["total", "username"])
  },
  methods: {
    ...mapActions(["addCar"])
  },
  mounted() {
    this.$store.dispatch("getMerchant",this.$route.params.id);
    this.$store.dispatch("getDetail",this.$route.params.id);
    this.$store.dispatch("getProduct",this.$route.params.id);
    this.$store.dispatch("getShops",this.$route.params.id);
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
      a {
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
  footer {
    position: fixed;
    bottom: 0;
    z-index: 100001;
    width: 100%;
    .Footer {
      background: #fff;
      height: 0.5rem;
      width: 100%;
      display: flex;
      border-top: 1px solid #eee;
      .iconBtn {
        border-right: 1px solid #eee;
        width: 40%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        a{
          color:#333;
        }
        img {
          width: 0.22rem;
          height: 0.22rem;
          margin-bottom: 0.06rem;
        }
        .carIcon {
          position: relative;
          img {
            margin-left: 0.05rem;
          }
        }
      }
      .btn {
        width: 60%;
        display: flex;
        text-align: center;
        .divbtn {
          width: 50%;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .buy {
          background: #ff4400;
          color: #fff;
        }
      }
      /deep/ .ivu-badge {
        position: static;
      }
    }
  }
}
</style>