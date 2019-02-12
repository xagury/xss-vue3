<template>
  <div class="nav-box">
    <Tabs value="name1">
      <TabPane v-for="item in nav" :label="item.name" :key="item.id"></TabPane>
    </Tabs>
  </div>
</template>

<script>
import { Tabs, TabPane } from "iview";

export default {
  name: "Nav",
  data() {
    return {
      nav: [
        { id: 1, url: "newHome", name: "顺逛精选" },
        { id: 2, url: "dianqi", name: "家用电器" },
        { id: 3, url: "shop", name: "百货超市" },
        { id: 4, url: "home", name: "智慧家庭" },
        { id: 5, url: "diy", name: "家装定制" },
        { id: 6, url: "diy", name: "众创首发" },
        { id: 7, url: "diy", name: "生活服务" },
        { id: 8, url: "diy", name: "体验店" }
      ]
    };
  },
  components: {
    Tabs,
    TabPane
  }
};
</script>
<style scope lang='scss'>
.nav-box {
  width:100%;
  overflow: hidden;
  /deep/ .ivu-tabs {
    .ivu-tabs-bar {
      background: url(https://cdn50.ehaier.com/mobilemall-admin-web/bannercontroller/image/2019/01/40ccf20d247b402692fa061459b85d53.png)
        0% 0% / 100% 100% no-repeat;
      color: #fff;
      .ivu-tabs-nav-container {
        font-size: 0.14rem;
        line-height: 0.29rem;
        .ivu-tabs-nav .ivu-tabs-tab-active {
          font-weight: 900;
          font-size: .16rem;
          color: #fff;
        }
      }
      .ivu-tabs-ink-bar {
      background-color:#fff;
      padding:0 .01rem;
      height:.03rem;
    }
    }
  }
}
</style>

