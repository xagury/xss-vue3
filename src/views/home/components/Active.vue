<template>
  <div class="Active">
    <h3 class="title">
      <img class="icon" src="https://cdn09.ehaier.com/shunguang/H5/www/img/newvision/hdjx.png" alt>
      <span>活动精选</span>
      <a href="#" class="more">
        爆款 钜惠 | 更多
        <img src="https://cdn09.ehaier.com/shunguang/H5/www/img/newvision/more.png" alt>
      </a>
    </h3>
    <main>
      <header>
        <img
          src="https://cdn50.ehaier.com/mobilemall-admin-web/bannercontroller/image/2019/01/92eb9ce7e65548e9acb515c3d85826b1.jpg"
          alt
        >
      </header>
      <div class="box">
        <img
          src="https://cdn50.ehaier.com/mobile-cms-admin/uploadimagecontroller/image/2018/12/fd69754e3a9842289a79f15642cbdd8b.jpg"
          alt
        >
        <img
          src="https://cdn50.ehaier.com/mobile-cms-admin/uploadimagecontroller/image/2018/12/a23537527dcb4225b7d5ff5650efcee3.jpg"
          alt
        >
        <img
          src="https://cdn50.ehaier.com/mobile-cms-admin/uploadimagecontroller/image/2019/01/5a5c591d007945d899b1fd1a894a4794.jpg"
          alt
        >
      </div>
    </main>
  </div>
</template>

<script>


export default {
  name: "Active",
  data() {
    return {
      value2: 0
    };
  },
  components: {}
};
</script>
<style scope lang='scss'>
.Active {
  overflow: hidden;
  width: 100%;
  background: #fff;
  margin-top: 0.1rem;
  padding-bottom: 0.1rem;
  position: relative;
  .title {
    overflow: hidden;
    margin: 0.1rem;

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
    padding: 0 0.15rem;

    header {
      width: 3.45rem;
      height: 1.1rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .box {
      display: flex;
      justify-content: space-around;
      img {
        width: 1.15rem;
        height: 1.36rem;
      }
    }
  }
}
</style>
