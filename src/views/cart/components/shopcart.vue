<template>
  <div class="shopcart">
    <div class="shop-box">
      <h3>
        总共
        <span class="numshop">{{total.num}}</span>
        件商品
      </h3>

      <ul>
        <li v-for="(item,index) in cars" :key="index">
          <div class="shop">
            <div class="p-title">
              <div class="select">
                <i></i>
              </div>
              <div class="title">{{item.productFullName}}</div>
            </div>
            <div class="shopDesc">
              <div class="p-img">
                <img :src="item.defaultImageUrl" alt>
              </div>
              <div class="p-desc">
                <div class="p-name">{{item.productTitle}}</div>
                <div class="hr"></div>
                <div class="p-attr">
                  <span>已选</span>
                  {{item.productName}}
                </div>
                <div class="row">
                  <button class="btn reduce" @click="reduceCar(item)">-</button>
                  <div class="shopNum">{{item.num}}</div>
                  <button class="btn add" @click="addCar(item)">+</button>
                </div>
                <div class="del" @click=" delCar(item) ">删除</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <footer>
      <div class="allselect">
        <div class="select">
          <i></i>
          <span>全选</span>
        </div>
      </div>

      <div class="total-box">
        <div class="total-desc">
          <p class="p-total">
            合计:￥
            <span class="total">{{total.price}}.00</span>
          </p>
          <p>不含运费</p>
        </div>
        <div class="total-btn">结算</div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Shopcart",
  props: ["cars"],
  components: {},
  methods: {
    ...mapActions(["addCar", "reduceCar", "delCar"])
  },
  computed: {
    ...mapGetters(["total", "username"])
  }
};
</script>

<style scope lang='scss'>
.shopcart {
  width: 100%;
  .shop-box {
    h3 {
      padding: 0.12rem;
      text-align: left;
      font-size: 0.14rem;
          vertical-align: baseline;
    font-family: inherit;
    outline: 0;
      
        box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
        -webkit-tap-highlight-color: rgba(0,0,0,0);

    }
    ul {
      li {
        margin-bottom:.1rem;
        width: 100%;
        height: 1.85rem;
        background: #fff;
        .shop {
          .p-title {
            padding: 0.1rem 0.13rem;
            .select {
              position: absolute;
              margin-left: 0.2rem;
              margin-top: 0.03rem;
              i {
                width: 28px;
                height: 28px;
                display: block;
                border: 0;
                background: 0 0;
                cursor: pointer;
                -webkit-appearance: none;
                color: #666;
                border-radius: 50%;
                border: 1px solid #999;
              }
            }
            .title {
              margin-left: 0.58rem;
              font-size: 0.14rem;
              line-height: 0.3rem;
              font-weight: 900;
              padding: 0rem 0.2rem;
              width: 2.91333rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .shopDesc {
            padding: 0.05rem;
            display: flex;
            height: 1.35rem;

            .p-img {
              width: 0.913rem;
              height: 0.1.3rem;
              img {
                width: 0.72rem;
                height: 0.72rem;
                display: block;
                margin: 0.1rem auto 0;
              }
            }
            .p-desc {
              width: 2.64rem;
              position: relative;
              .p-name {
                line-height: 0.2rem;
                height: 0.4rem;
                font-size: 0.12rem;
                text-align: left;
              }
              .hr {
                margin-top: 0.1rem;
                border-top: 1px solid #eee !important;
                margin-left: 10px !important;
                margin-right: 10px !important;
              }
              .p-attr {
                margin-top: 0.1rem;
                text-align: left;
              }
              .row {
                display: flex;
                height: 0.4rem;
                border: 1px solid #eee;

                width: 1.27rem;
                border-radius: 0.05rem;
                margin-top: 0.1rem;
                padding: 0.05rem 0;
                .btn {
                  flex: 0 0 25%;
                  background: none;
                  font-size: 0.2rem;
                  line-height: 0.2rem;
                }
                .shopNum {
                  flex: 0 0 50%;
                  font-size: 0.14rem;
                  line-height: 0.3rem;
                  border-left: 1px solid #eee;
                  border-right: 1px solid #eee;
                }
                .add {
                }
              }
              .del {
                position: absolute;
                margin-left: 1rem;
                right: 0.1rem;
                bottom: 0.1rem;
                padding: 0.14rem 0.16rem;
                border-radius: 0.05rem;
                border: 1px solid #eee !important;
              }
            }
          }
        }
      }
    }
  }

  footer {
    background: #fff;
    height: 0.56rem;
    position: fixed;
    bottom: 0.47rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    .allselect {
      display: flex;
      width: 1.3rem;
      justify-content: space-around;
      align-items: center;
      .select {
        display: flex;

        justify-content: space-around;
        i {
          margin-top: 0.1rem;
          width: 28px;
          height: 28px;
          display: block;
          border: 0;
          background: 0 0;
          cursor: pointer;
          -webkit-appearance: none;
          color: #666;
          border-radius: 50%;
          border: 1px solid #999;
        }
      }
      span {
        text-align: left;
        line-height: 0.5rem;
        margin-left: 0.1rem;
        font-weight: 900;
      }
    }
    .total-box {
      display: flex;
      align-items: center;
      .total-desc {
        margin-right: 0.1rem;
        .p-total {
          font-weight: 700;
          line-height: 0.2rem;
        }
        p {
        }
      }
      .total-btn {
        background: #ff7139 !important;
        font-size: 0.16rem;
        line-height: 0.6rem;
        padding: 0 0.2rem;
        color: #fff;
      }
    }
  }
}
</style>