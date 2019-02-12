<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
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
 padding-bottom: .44rem;
}
</style>
