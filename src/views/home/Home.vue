<template>
  <div class="home-box">
    <div class="fixed-header">
      <header>
        <div class="location">
          <a href="#">
            <img src="img/location.png" alt>
            <span>崂山区</span>
          </a>
        </div>

        <div class="search">
          <a href="#">
            <img src="img/search.png" alt>
            <div class="a-search">滚筒洗衣机</div>
          </a>
        </div>
        <div class="message">
          <a href="#">
            <img src="img/message.png" alt>
          </a>
        </div>
      </header> 
      <!-- <IndexHeader></IndexHeader> -->
      <Nav></Nav>
    </div>
    <Banner></Banner>
    <div class='homenav'>
      <ul>
        <li v-for ="item in arr" :key='item.id'>
          <a href="#">
            <img :src="item.url" alt=""/>
            <p>{{item.name}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class='banner'>
      <img src="https://cdn50.ehaier.com/mobilemall-admin-web/bannercontroller/image/2019/01/3c99a829bd2b47b18eac1b3a8c02aca5.png" alt="">
    </div>
    <News></News>
    <Countdown></Countdown>
    <Everday></Everday>
    <Brand></Brand>
    <Video></Video>
    <Active></Active>
    <Main></Main>
  </div>
</template>

<script>
import Vue from "vue";
import Nav from "./components/Nav";
import Banner from './components/Banner'
import News from './components/News'
import Countdown from './components/Countdown'
import Everday from './components/Everday'
import Brand from './components/Brand'
import Video from './components/Video'
import Active from './components/Active'
import Main from './components/Main'
export default {
  name: "Home",
  data() {
    return{
      arr : [
        {id:1,name:'开店有礼',url:'img/kdyl.png'},
        {id:2,name:'每日榜单',url:'img/6163cfca917e481e87b6005c30b3c0d7.png'},
        {id:3,name:'充值缴费',url:'img/eedff207055b4ae4983ca247ae1f41dd.png'},
        {id:4,name:'领券中心',url:'img/84604b048f1649299aa505ad12dbebb8.png'},
        {id:5,name:'全球购',url:'img/5654faf2d4bc4f5e9ae84d2c4832cf52.png'},
         {id:6,name:'寻·Me',url:'img/8529b8aabf0541b9a3c33556b9368a8a.png'},{id:7,name:'更多',url:'img/8529b8aabf0541b9a3c33556b9368a8a.png'}
      ]
    }
  },
  components: {
    Nav,
    Banner,
    News,
    Countdown,
    Everday,
    Brand,
    Video,
    Active,
    Main
  }

};
</script>

<style lang="scss" scoped>
.home-box {
     background: #f4f4f4;
  width:100%;
  overflow: hidden;
  padding-top: 0.88rem;
  .fixed-header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
  }
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
.homenav{
   overflow:scroll;
  visibility: visible;
    background: url(https://cdn50.ehaier.com/mobilemall-admin-web/bannercontroller/image/2019/01/3581f5f2aa404e3fbe9ec6d13b432890.png) left top / 100% no-repeat;
    ul{
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      width:140%;
      li{
        width:.75rem;
        height:1rem;
        a{
          display:block;
          img{
            width:.4rem;
            height:.4rem;
            display: block;
            margin:.15rem auto 0;
          }
          p{
            color:#fff;
            margin-top:.1rem;
          }
        }
      }
    }
}
.banner{
 
  width:100%;
  img{
    width:100%;
    height: auto;
  }
}
</style>
