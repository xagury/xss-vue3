<template>
  <div class="Banner">
    <Carousel autoplay loop radius-dot>
      <CarouselItem v-for="(item,index) in banners" :key="index">
        <img class="img" :src="item" alt>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, CarouselItem } from "iview";

export default {
  name: "Banner",
  props: ["banners"],
  data() {
    return {};
  },
  components: {
    Carousel,
    CarouselItem
  }
};
</script>
<style scope lang='scss'>
.Banner {
  background:#fff;
  width: 100%;
  height: 3.05rem;
  .img {
    width: 100%;
    height: 3.05rem;
    display: block;
  }

  /deep/ .ivu-carousel {
    width: 100%;
    height: 100%;
    img {
      width: 3rem;
      height: 3rem;
      display: block;
      margin:0 auto;
    }
  }
}
</style>
