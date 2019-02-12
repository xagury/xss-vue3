<template>
  <div class="Brand">
    <h3 class="title">
      <img class="icon" src="https://cdn09.ehaier.com/shunguang/H5/www/img/newvision/mrss.png" alt>
      <span>名牌好货</span>
      <a href="#" class="more">
        大牌 潮品 | 更多
        <img src="https://cdn09.ehaier.com/shunguang/H5/www/img/newvision/more.png" alt>
      </a>
    </h3>
    <main>
      <img
        src="https://cdn50.ehaier.com/mobile-cms-admin/uploadimagecontroller/image/2019/01/25f517b7c9b2495c889d966e3ca469ed.jpg"
        alt
      >
      <img
        src="https://cdn50.ehaier.com/mobile-cms-admin/uploadimagecontroller/image/2019/01/694172083bd94c83b372ec81498cf11a.jpg"
        alt
      >
    </main>
  </div>
</template>

<script>


export default {
  name: "Brand",
  data() {
    return {
      value2: 0
    };
  },
  components: {}
};
</script>
<style scope lang='scss'>
.Brand {
  overflow: hidden;
  width: 100%;
  background: #fff;
  margin-top: 0.1rem;
  padding-bottom: 0.1rem;
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
    padding: 0 0.1rem;
    display: flex;
    justify-content: space-around;
    img {
      width: 1.692rem;
      height: 1.15rem;
    }
  }
}
</style>
