<template>
  <div class="news">
   <img class='icon' src='https://cdn09.ehaier.com/shunguang/H5/www/img/index-sggg.png'/>
   <div class='content'>因南昌仓库升级影响下单及配送的公告 </div>
   <a href="#" class='more'>更多</a>
  </div>
</template>

<script>
import { Carousel, CarouselItem } from "iview";


export default {
  name: "News",
  data() {
    return {
      value2: 0,
    
    };
  },
  components: {
   
  },
  
};
</script>
<style scope lang='scss'>
.news {
  border-top:.01rem solid #e4e4e4;
  background:#fff;
  padding:.03rem .03rem;
  width:100%;
  height:.4rem;
  display: flex;
  position: relative;
  .icon{
    width:.58rem;
    height:.18rem;
    display: block;
    margin-top:.05rem;
    margin-left:.1rem;
  }
  .content{
width: 2.7rem;
    padding-left: .166667rem;
    padding-right: .266667rem;
        font-size: .12rem;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    line-height:.3rem;
  }
  .more{
        font-size: .12rem;
    color: #999;
    line-height:.3rem;
  }
}
</style>
