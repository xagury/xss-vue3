<template>
  <div class="category">
    <div class="fixed-header">
      <header>
        <div class="location">
          <a href="#">
            <img src="/img/location.png" alt>
            <span>崂山区</span>
          </a>
        </div>

        <div class="search">
          <a href="#">
            <img src="/img/search.png" alt>
            <div class="a-search">滚筒洗衣机</div>
          </a>
        </div>
        <div class="message">
          <a href="#">
            <img src="/img/message.png" alt>
          </a>
        </div>
      </header>
    </div>
    <main>
      <article>
        <ListNav></ListNav>
      </article>
      <aside>
        <ListContent></ListContent>
      </aside>
    </main>
  </div>
</template>

<script>
import ListNav from "./components/ListNav";
import ListContent from "./components/ListContent";
export default {
  name: "Category",
  components: { ListNav, ListContent }
};
</script>

<style lang="scss" scoped>
.category {
      background-color: #fff;
  
  width: 100%;
  overflow: hidden;
  height: 100%;
  padding-top: 0.44rem;
  .fixed-header {
    background: #f4f4f4;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    header {
      overflow: hidden;
      background: url(https://cdn50.ehaier.com/mobilemall-admin-web/bannercontroller/image/2019/01/ca1eb11ceb6a48cc9f891ff1ee20b188.png)
        0% 0% / 100% 100% no-repeat;
      height: 0.44rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.2rem;
      a {
        color: #fff;
        display: block;
      }
      .location {
        a {
          display: flex;
          justify-content: space-around;
        }

        img {
          width: 0.24rem;
          height: 0.24rem;
          display: block;
        }
        span {
          display: block;
          line-height: 0.24rem;
          font-size: 0.14rem;
        }
      }
      .search {
        background: #f4f4f4;
        width: 2.202rem;
        height: 0.28rem;
        border-radius: 0.273333rem;
        // a {
        //   display: flex;
        //   justify-content: space-around;
        // }
        img {
          width: 0.13rem;
          height: 0.13rem;
          display: block;
          margin: 0.08rem 0 0 0.1rem;
        }
        .a-search {
          font-size: 0.12rem;
          color: #222;
          margin: -0.16rem 0 0 -01rem;
        }
      }
      .message {
        a {
          position: relative;
        }
        img {
          width: 0.24rem;
          height: 0.24rem;
          display: block;
        }
        a:after {
          position: absolute;
          content: " ";
          height: 8px;
          width: 8px;
          border-radius: 100%;
          background-color: red;
          right: -2px;
          top: -3px;
        }
      }
    }
  }
  main {
    position: fixed;
    border-top: 1px solid #d9d9d9;
    display: flex;
    height: 100%;
    width: 100%;
    article {
      overflow-y: scroll;
      z-index: 10;
      flex: 1;
      padding-bottom: 1rem;
      border-right: 1px solid #d9d9d9;
    }
    aside {
      flex: 3;
      overflow-y: scroll;
      z-index: 10;

      padding-bottom: 1rem;
    }
  }
}
</style>

