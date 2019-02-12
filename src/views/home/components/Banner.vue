<template>
  <div class="home">
 <Carousel autoplay v-model="value2" loop>
        <CarouselItem 
        v-for = "item in banners"
        :key = "item.id"
        >
            <div class="demo-carousel"><img :src="item.imageUrl" alt=""></div>
        </CarouselItem>
       
  
    </Carousel>

  </div>
</template>

<script>
import { Carousel,CarouselItem } from 'iview'
import { mapState } from 'vuex'
export default {
  
  name: 'Banner',
  data(){
    return {
                value2: 0,
                bannerlist: []
            }
  },
  components: {
    Carousel,CarouselItem
  },
   computed: {
    ...mapState({
      banners: state => state.home.banner,
    })
  },
  mounted(){
    this.$store.dispatch('getBanner')
  }
}
</script>
