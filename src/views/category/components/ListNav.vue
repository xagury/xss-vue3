<template>
  <div class="listNav">
    <router-link
      v-for="item in listnav"
      :key="item.id"
      :to="'/category/'+item.id"
      class="box"
      @click="mapActions(item.id)"
    >{{item.navigationName}}</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ListNav",
  components: {},
  computed: {
    ...mapState({
      listnav: state => state.category.listnav
    })
  },
  mounted() {
    this.$store.dispatch("getListNav");
  },
  methods: {
    ...mapActions(["getListContent"]),
    
  }
};
</script>
<style lang="scss" scoped>
.listNav {
  padding-top:.1rem;
  a {
    width: 100%;
    display: block;
    border-bottom: none;
    text-align: left;
    font-size: .14rem;
    color: #333;
    position: relative;
    line-height: .32rem;
    padding: .1rem .1rem .1rem .1rem;
     &.router-link-exact-active {
        color: #2577e3;

      }
  }
}
</style>

