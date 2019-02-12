<template>
  <div class="listContent">
    <div class="banner">
      <Carousel loop>
        <div v-for="item in listcontent" :key="item.id">
          <CarouselItem v-if="item.imageUrl!==null && item.idPath === '/'+item.parentId+'/' ">
            <div class="demo-carousel">
              <img :src="item.imageUrl" alt>
            </div>
          </CarouselItem>
        </div>
      </Carousel>
    </div>

    <div class="content">
      <div class="shop" v-for="item in listcontent" :key="item.id">
        <div class="title" v-if="item.imageUrl === null">
          <span></span>
          {{item.navigationName}}
          <span></span>
        </div>
        <div class="box" v-if="item.imageUrl!==null && item.idPath !== '/'+item.parentId+'/' ">
          <img :src="item.imageUrl" alt>
          <span>{{item.navigationName}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, CarouselItem } from "iview";
import { mapState, mapActions } from "vuex";
export default {
  name: "ListContent",
  components: { Carousel, CarouselItem },
  computed: {
    ...mapState({
      listcontent: state => state.category.listcontent
    })
  },
  updated() {
    this.$store.dispatch("getListContent", this.$route.params.id);
  },
  mounted() {
    this.$store.dispatch("getListContent", this.$route.params.id);
  },
  methods: {
    ...mapActions(["getListContent"])
  }
};
</script>
<style lang="scss" scoped>
.listContent {
  overflow: hidden;
  .banner {
    width: 2.51rem;
    height: 0.85rem;
    margin: 0.1rem 0.2rem;
  }
  .shop {
    margin: 0.1rem 0.14rem;
    display: block;
    
    .title {
       overflow: hidden;
      display: block;
      text-align: center;
      font-size: 0.14rem;
      color: #333;
      margin-top: 0.24rem;
      height:.35rem;
      width:100%;
      span {
        height: 1px;
        width: 24px;
        background: #333;
        display: inline-block;
        vertical-align: middle;
      }
      padding: .1rem 0.173333rem;
    }
    .box {
      float: left;
      width: 0.84rem;
      height: 1.11rem;

      img {
        width: 0.77rem;
        height: 0.77rem;
      }
    }
  }
}
</style>