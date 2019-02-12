<template>
  <div class="Video">
    <h3 class="title">
      <img class="icon" src="https://cdn09.ehaier.com/shunguang/H5/www/img/home_yl/spg.png" alt>
      <span>视频购</span>
      <a href="#" class="more">
        细节 视听 | 更多
        <img src="https://cdn09.ehaier.com/shunguang/H5/www/img/newvision/more.png" alt>
      </a>
    </h3>
    <main>
      <div class="wrap">
        <div class="content-box1">
          <div class="content-box" v-for="item in home.videoActivityVo" :key="item.id">
            <div class="content">
              <img class="p-img" :src="item.videoPicUrl" alt>
              <span class="p-name" :data-id="item.productId">{{item.productFullName}}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: "Video",
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState({
      home: state => state.home.home
    })
  },
  mounted() {
    this.$store.dispatch("getHome");
  }
};
</script>
<style scope lang='scss'>
.Video {
  width: 100%;
  background: #fff;
  margin-top: 0.05rem;
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
  .wrap {
    overflow: scroll;
    padding: 0.1rem;
    .content-box1 {
      width: 1200%;
      .content-box {
        .content {
          box-shadow: rgb(238, 238, 238) 1px 2px 2px 1px;
          transition-duration: 0ms;
          transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg);
          float: left;
          width: 2.42rem;
          height: 1.63rem;
          margin-right:.1rem;
          .p-img {
            width: 2.41rem;
            height: 1.42rem;
            display: block;
            margin: 0 auto;

          }
          .p-name {
            padding-left: 5px;
            width: 2rem;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
