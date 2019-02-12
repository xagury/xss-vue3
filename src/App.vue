<template>
  <div id="app">

    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from "vue";

import Footer from '@components/commons/Footer'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
#app {
 padding-bottom: .46rem;
}
</style>
