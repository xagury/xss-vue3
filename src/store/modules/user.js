import axios from 'axios'
import * as type from '@store/type'

const state = {
  order: [
    {
    id: 1,
    imgURl: '/img/waitPay@2x.png',
    name: '待付款'
      },
       {
        id: 2,
        imgURl: '/img/waitSend@2x.png',
        name: '待发货'
      }, 
      {
        id: 3,
        imgURl: '/img/waitGet@2x.png',
        name: '待收货'
      }, 
      {
        id: 4,
        imgURl: '/img/waitJudge@2x.png',
        name: '待评价'
      }, 
      {
    id: 5,
    imgURl: '/img/fixIcon@2x.png',
    name: '售后/维修'

      }],
  store: [{
      id: 1,
      imgURl: '/img/open.png',
      name: '我要开店'
    },
    {
      id: 2,
      imgURl: '/img/cnine.png',
      name: '顺逛学院'
    }
  ],
  fun: [{
    id: 1,
    imgURl: '/img/ceight.png',
    name: '领券中心'
  }, {
    id: 2,
    imgURl: '/img/cone.png',
    name: '充值缴费'
  }, {
    id: 3,
    imgURl: '/img/cthree.png',
    name: '地址管理'
  }, {
    id: 4,
    imgURl: '/img/celeven.png',
    name: '我的收藏'
  }, {
    id: 5,
    imgURl: '/img/cseven.png',
    name: '金币游戏'
  }, {
    id: 6,
    imgURl: '/img/csecond.png',
    name: '我的预约'
  }, {
    id: 7,
    imgURl: '/img/ctwelve.png',
    name: '我的投资'
  }],
  users : [],
  username: '' 

}

const mutations = {
  [type.REGISTER_USER]: (state, users) => {
    state.users = users
  },
  [type.LOGIN_USER]: (state, users) => {
    state.users = users
  },

}

const actions = {
  initUser({commit}){
    let users = getUsers();
    commit(type.REGISTER_USER,users)
  },
  register({commit},user,success,fail){
    setTimeout(()=>{
      let users = getUsers();
      users.push(user)
      localStorage.users = JSON.stringify(users)
      commit(type.REGISTER_USER,users)
      if(success) success()
      return false
    },0)
  },
  initUsername({commit}){
    let users = getUsername();
    commit(type.LOGIN_USER,users)
  },
  login({commit},user){
    setTimeout(()=>{
      let users = getUsers();
      let username = getUsername();
      user.forEach((item,index) =>{
        if(item.username === user.username && item.password === user.password){
          username.push(user.username)
          localStorage.username = JSON.stringify(username)
          commit(type.LOGIN_USER,username)
        }
      })
      commit(type.LOGIN_USER,users)
    },0)
  }
}

function getUsers() {
  return JSON.parse(localStorage.users ? localStorage.users : '[]')
}

function getUsername() {
  return JSON.parse(localStorage.username ? localStorage.username : '[]')
}

export default {
  state,
  mutations,
  actions
}