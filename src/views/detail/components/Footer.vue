<template>
  <div class="Footer">
    <div class="iconBtn">
      <div class="btnicon kf">
        <img src="/img/ic_kf.png">
        <span>客服</span>
      </div>
      <div class="btnicon carIcon">
        <Badge :count="5" type="error">
          <img src="/img/car2x.png">
          <span>购物车</span>
        </Badge>
      </div>
      <div class="btnicon like">
        <img src="/img/shoucang@2x.png">
        <span>收藏</span>
      </div>
    </div>
    <div class="btn">
      <div class="divbtn join">加入购物车</div>
      <div class="divbtn buy">立即购买</div>
    </div>
  </div>
</template>

<script>
import { Badge } from "iview";
import { mapState } from "vuex";
export default {
  name: "Footer",

  data() {
    return {};
  },
  components: { Badge }
};
</script>
<style scope lang='scss'>
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
    img {
      width: 0.22rem;
      height: 0.22rem;
      margin-bottom: 0.06rem;
    }
    .carIcon {
      position: relative;
      img{
        margin-left:.05rem;
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
</style>
