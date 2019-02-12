<template>
  <div class="shopcart">
    <div class="shop-box">
      <h3>
        总共
        <span class="numshop">1</span>
        件商品
      </h3>

      <ul>
        <li>
          <div class="shop">
            <div class="p-title">
              <div class="select">
                <i></i>
              </div>
              <div class="title">自然堂 面部护肤 雪润皙白冰肌水 90ML</div>
            </div>
            <div class="shopDesc">
              <div class="p-img">
                <img
                  src="https://cdn50.ehaier.com/store-manager-web/test/image/2019/01/e4e8fe6499074923a88099b174ceabfa.jpg"
                  alt
                >
              </div>
              <div class="p-desc">
                <div class="p-name">补水保湿 滋润修护 提亮肤色祛斑</div>
                <div class="hr"></div>
                <div class="p-attr">
                  <span>已选</span>
                  冰肌水90ML
                </div>
                <div class="row">
                  <button class="btn reduce">-</button>
                  <div class="shopNum">1</div>
                  <button class="btn add">+</button>
                </div>
                <div class="del">删除</div>
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
            <span class="total">0.00</span>
          </p>
          <p>不含运费</p>
        </div>
        <div class="total-btn">结算</div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Shopcart",
  components: {}
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
    }
    ul {
      li {
        width: 100%;
        height: 1.85rem;
        background: #fff;
        .shop {
          .p-title {
            padding: 0.1rem 0.13rem;
            .select {
              position: absolute;

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
              font-size: 0.14rem;
              line-height: 0.3rem;
              font-weight: 900;
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
                  font-size:.14rem;
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
        font-weight:900;
      }
    }
    .total-box {
      display: flex;
      align-items: center;
      .total-desc{
        margin-right:.1rem;
        .p-total{
          font-weight:700;
          line-height:.2rem;
        }
        p{

        }
      }
      .total-btn{
            background: #ff7139!important;
            font-size:.16rem;
            line-height:.6rem;
            padding:0 .2rem;
            color:#fff;
      }
    }
  }
}
</style>