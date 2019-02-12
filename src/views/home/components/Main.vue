<template>
  <div class="Main">
    <header>
      <nav>
        <ul>
          <li v-for="(item,idx) in nav" :key="item.id">
            <a
              href="javascript:void(0)"
              :class="idx==index?'active':''"
              @click="getMainContent(item.id);son(item,idx)"
            >{{item.labelName}}</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <aside>
        <div class="content">
          <div class="floor" v-for="item1 in content" :key="item1.id">
            <img class="p-img" :src="item1.imageUrl" alt>
            <span class="p-name">{{item1.storyName}}</span>
            <div class="p-author">
              <img
                class="a-img"
                :src="item1.avatar"
                alt
              >
              <span class="a-name">{{item1.author}}</span>
              <img
                class="a-eye"
                src="https://cdn09.ehaier.com/shunguang/H5/www/img/home_yl/gk@2x.png"
                alt
              >
              <span class="a-num">{{item1.praise}}</span>
            </div>
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
      index: 0
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
    this.$store.dispatch("getMainContent",'33');
  },

  methods: {

    ...mapActions(["getMainContent"]),
    son(item, idx) {
      this.index = idx;
    }
  }
};
</script>
<style scope lang='scss'>
.Main {
  margin-top: 0.1rem;
  header {
    background: #fff;
    nav {
      padding: 0 0.1rem;
      ul {
        overflow: hidden;
        display: flex;
        justify-content: space-around;
        li {
          a {
            font-size: 0.14rem;
            display: block;
            color: #999;
            line-height: 0.44rem;
            &.active {
              font-size: 0.16rem;
              color: #ff6026;
              font-weight: 900;
              position: relative;
              border-bottom: 3px solid #ff6026;
            }
          }
        }
      }
    }
  }
  main {
    aside {
      .content {
        padding: 0.05rem;
        overflow: hidden;
        .floor:nth-child(even) {
          margin-right: 0rem;
        }
        .floor {
          margin-right: 0.03rem;
          float: left;
          width: 1.81rem;
          height: 2.61rem;
          background-color: #fff;
          margin-bottom: 0.05rem;
          .p-img {
            width: 1.81rem;
            height: 1.8rem;
            font-size: 0;
            display: block;
            margin: 0 auto;
          }
          .p-name {
            display: block;
            font-weight: 400;
            margin-left: 0.05rem;
            width: 1.6rem;
            line-height: 0.5rem;
            font-size: 0.16rem;
            color: #333;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            height:.5rem;
          }
          .p-author {
            margin: 0 0.05rem;
            display: flex;
            .a-img {
              width: 0.2rem;
              height: 0.2rem;
              display: block;
            }
            .a-name {
              margin: 0 0.03rem;
              white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 2.6rem;

            }
            .a-eye {
              width: 0.2rem;
              height: 0.2rem;
              display: block;
            }
            .a-num {
            }
          }
        }
      }
    }
  }
}
</style>
