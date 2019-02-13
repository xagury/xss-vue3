<template>
  <div id="app">

    <router-view/>
    <Footer v-show = 'footerFlag'></Footer>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions } from 'vuex'
import Footer from '@components/commons/Footer'
import * as type from '@store/type'

export default {
  name: 'App',
  components: {
    Footer
  },
  computed: {
    ...mapGetters(['footerFlag'])
  },
  watch:{
    $route: {
      handler(){
        let path = this.$route.path
        if(/login|register|detail/.test(path)){
          this.$store.dispatch(type.FOOTER_FLAG_CHANGE,false)
        }else{
          this.$store.dispatch(type.FOOTER_FLAG_CHANGE,true)
        }
      },
      immediate: true //立刻开启当前数据监听和执行
    }
  }
}
</script>

<style>
#app {

}
</style>
