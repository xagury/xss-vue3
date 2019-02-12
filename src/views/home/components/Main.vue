<template>
  <div class="Main">
    <header>
      <nav>
        <ul>
          <li v-for="item in nav" :key="item.id">
            
            <a href="javascript:void(0)" @click="getMainContent(item.id)">{{item.labelName}}</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <aside>
        <div class="content">
          <div class="floor1" v-for="item1 in content" :key="item1.id">
            <img :src="item1.imageUrl" alt>
          </div>
        </div>
      </aside>
    </main>
  </div>
</template>

<script>
import { Carousel, CarouselItem } from "iview";
import { mapState, mapActions } from "vuex";

export default {
  name: "Main",
  data() {
    return {
      value2: 0,
      id: null
    };
  },
  components: {},
  computed: {
    ...mapState({
      nav: state => state.home.mainnav,
      content: state => state.home.maincontent
    })
  },
  mounted() {
    this.$store.dispatch("getMainNav");
    // this.$store.dispatch("getMainContent",33);
  },
  methods: {
    ...mapActions(["getMainContent"])
  }
};
</script>
<style scope lang='scss'>
.Main {
  margin-top: 0.1rem;
  header {
    background: #fff;
    nav {
      padding: 0.1rem;
      ul {
        overflow: hidden;
        display: flex;
        justify-content: space-around;
        li {
          a {
            display: block;
            color: #999;
            &.router-link-exact-active {
              font-size: 0.426667rem;
              color: #ff6026;
              font-weight: 900;
              position: relative;
            }
          }
        }
      }
    }
  }
}
</style>
