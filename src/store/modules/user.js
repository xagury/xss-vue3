import axios from 'axios'
import * as type from '@store/type'

const state = {
  order: [{
    id: 1,
    imgURl: '/img/waitPay@2x.png',
    name: '待付款'
  },{
    id: 2,
    imgURl: '/img/waitSend@2x.png',
    name: '待发货'
  },{
    id: 3,
    imgURl: '/img/waitGet@2x.png',
    name: '待收货'
  },{
    id: 4,
    imgURl: '/img/waitJudge@2x.png',
    name: '待评价'
  },{
    id: 5,
    imgURl: '/img/fixIcon@2x.png',
    name: '售后/维修'
  }],
  store: [
    {
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
  },{
    id: 2,
    imgURl: '/img/cone.png',
    name: '充值缴费'
  },{
    id: 3,
    imgURl: '/img/cthree.png',
    name: '地址管理'
  },{
    id: 4,
    imgURl: '/img/celeven.png',
    name: '我的收藏'
  },{
    id: 5,
    imgURl: '/img/cseven.png',
    name: '金币游戏'
  },{
    id: 6,
    imgURl: '/img/csecond.png',
    name: '我的预约'
  },{
    id: 7,
    imgURl: '/img/ctwelve.png',
    name: '我的投资'
  }],

}

const mutations = {
  // [type.GET_ORDER]: (state, payload) => {
  //   state.order = payload
  // },
  // [type.GET_STORE]: (state, payload) => {
  //   state.store = payload
  // },
  // [type.FUN]: (state, payload) => {
  //   state.fun = payload
  // }

}

const actions = {
 
}

export default {
  state,
  mutations,
  actions
}