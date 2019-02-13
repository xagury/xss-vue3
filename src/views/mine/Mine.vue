<template>
  <div class="mine">
    <header>
      <div class="top">
        <div class="settings">
          <a href="javascript:void(0)">
          <img src="/img/personalSetting@2x.png" alt>
          </a>
        </div>
        <div class="kf">
          <img src="/img/service.png" alt>
          <img src="/img/message.png" alt>
        </div>
      </div>
      <div class="userIcon">
        <img src="/img/usericon.jpg" alt>
        好嗨哟，好炫目,好夺彩,好震撼
      </div>
    </header>
    <main>
      <div class="box order">
        <CellGroup>
          <Cell title="我的订单" extra="查看订单" to="#"/>
        </CellGroup>
        <div class="content">
          <ul>
            <li v-for="item in order" :key="item.id">
              <a href="javascript:void(0)">
                <img :src="item.imgURl" alt>
                <span>{{item.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="box money">
        <CellGroup>
          <Cell title="我的钱包" extra="查看全部" to="#"/>
        </CellGroup>
        <div class="content">
          <ul>
            <li>
              <a href="javascript:void(0)">
                <div class="text">0张</div>
                <span>优惠券</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="text">0.00</div>
                <span>顺逛宝</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="text1">0</div>
                <span>钻石</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img src="/img/baitiao-mine.png" alt>
                <span>顺逛白条</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="box store">
        <CellGroup>
          <Cell title="我的店铺" to="#"/>
        </CellGroup>
        <div class="content">
          <ul>
            <li v-for="item in store" :key="item.id">
              <a href="javascript:void(0)">
                <img :src="item.imgURl" alt>
                <span>{{item.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="box fun">
         <CellGroup>
        <Cell title="常用功能"/>
         </CellGroup>
        <div class="content">
          <ul>
            <li v-for="item in fun" :key="item.id">
              <a href="javascript:void(0)">
                <img :src="item.imgURl" alt>
                <span>{{item.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
    <footer>
      退出登录
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Icon, Cell, CellGroup } from "iview";
export default {
  name: "Mine",
  components: {},
  components: {
    Icon,

    Cell,
    CellGroup
  },
  computed: {
    ...mapState({
      order: state => state.user.order,
      fun: state => state.user.fun,
      store: state => state.user.store
    })
  },
  mounted() {
    // this.$store.dispatch('getHome')
  }
};
</script>

<style scope lang='scss'>
.mine {
  background:#f4f4f4;
  padding-bottom:.6rem;
  header {
    padding: 0.1rem;
    height: 1.81rem;
    background: url(//cdn09.ehaier.com/shunguang/H5/www/img/mine/babynew.png)
      left top no-repeat;
    background-size: cover;
    .top {
      display: flex;
      justify-content: space-between;
      img {
        width: 0.28rem;
        height: 0.28rem;
      }
      .kf {
        display: flex;
        justify-content: space-between;
        img {
          margin-left: 0.1rem;
        }
      }
    }
    .userIcon {
      align-items: center;
      margin: 0.28rem 0 0 0.2rem;
      display: flex;
      color: #fff;
      img {
        margin-right: 0.1rem;
        width: 0.74rem;
        height: 0.74rem;
        border: 0.02rem solid #5d9dff;
        border-radius: 1.04rem;
      }
    }
  }
  main {
    margin-top: 0.1rem;
    .box {
      text-align: left;
      margin-top: 0.1rem;
      background: #fff;

      line-height: 0.4rem;
      font-size: 0.16rem;

      /deep/ .ivu-cell-group {
        height: 0.4rem;
        background: #fff;
        color: #333;
        text-align: left;
        border-bottom: 1px solid #eee;
      }
      /deep/ .ivu-cell-title {
        font-weight: 900;
        line-height: 0.3rem;
        font-size: 0.15rem;
      }
      /deep/ .ivu-cell-extra {
        font-size: 0.15rem;
      }
    }
    .order {
      .content {
        padding: 0.1rem 0.1rem 0;
        ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          li {
            a {
              img {
                width: 0.242rem;
                height: 0.242rem;
                display: block;
                margin: 0 auto;
              }
              span {
                text-align: center;
                color: #333;
                font-size: 0.14rem;
              }
            }
          }
        }
      }
    }
    .money {
      .content {
        padding: 0.1rem 0.2rem 0;
        ul {
          display: flex;
          
          align-items: center;
          li {
            margin-right:.3rem;
            a{
              text-align: center;
              .text{
                color: #0FA7FF;
                font-size:.16rem;
                line-height:.3rem;
              }
              .text1{
                color: #B63DF2;
                font-size:.16rem;
                line-height:.3rem;
              }
               img {
                width: 0.242rem;
                height: 0.242rem;
                display: block;
                margin: .03rem auto;
              }
              span {
                text-align: center;
                color: #333;
                font-size: 0.14rem;
              }
            }
          }
        }
      }
    }
    .store{
       .content {
        padding: 0.1rem 0.1rem 0;
        ul {
          display: flex;
          
          align-items: center;
          li {
            margin-right:.2rem;
            a {
              img {
                width: 0.4rem;
                height: 0.4rem;
                display: block;
                margin: 0 auto;
              }
              span {
                text-align: center;
                color: #333;
                font-size: 0.14rem;
              }
            }
          }
        }
      }
    }
    .fun{
       .content {
        padding: 0.1rem 0.2rem 0;
        ul {
          
          overflow: hidden;
          li {
            float: left;
            margin-right:.37rem;
            
            a {
              img {
                width: 0.4rem;
                height: 0.4rem;
                display: block;
                margin: 0 auto;
              }
              span {
                text-align: center;
                color: #333;
                font-size: 0.14rem;
              }
            }
          }
          li:nth-child(4){
            margin-right:0;
          }
        }
      }
    }
  }
  footer{
    height: .45rem;
    width: 3.15rem;
    line-height: .45rem;
    margin: 0.3rem auto 0;
    border-radius: 1.2rem;
    background: #2979FF;
    text-align: center;
    color: #fff;
    font-size: .14rem;
  }
}
</style>