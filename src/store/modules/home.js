import axios from 'axios'
import * as type from '@store/type'

const state = {
  banner: [],
  countdown: [],
  home: [],
  mainnav:[],
  maincontent:[],
  
}

const mutations = {
  [type.GET_BANNER]: (state, payload) => {
    state.banner = payload
  },
  [type.GET_COUNTDOWN]: (state, payload) => {
    state.countdown = payload
  },
  [type.GET_HOME]: (state, payload) => {
    state.home = payload
  },
  [type.GET_MAINNAV]: (state, payload) => {
    state.mainnav = payload
  },
  [type.GET_MAINCONTENT]: (state, payload) => {
    state.maincontent = payload
  }

}

const actions = {
  getBanner({
    commit
  }) {
    axios.get('/ehaier/sg/cms/home/banner.json', {
        params: {
          itemsId: 100,
          provinceId: 11,
          cityId: 111,
          regionId: 2450,
          street: 12045027,
        }
      })

      .then(res => (commit(type.GET_BANNER, res.data.data)))
      .catch(err => console.log(err))
  },
  getCountdown({
    commit
  }) {
    axios.get('/ehaier/sg/cms/flashSales/indexsale.json', {
        params: {
          provinceId: 11,
          cityId: 111,
          districtId: 2256,
          streetId: 12045027,
        }
      })

      .then(res => (commit(type.GET_COUNTDOWN, res.data.data.list)))
      .catch(err => console.log(err))
  },
  getHome({
    commit
  }) {
    axios.get('/ehaier/sg/cms/revision/indexActivities.json', {
        params: {
          cityId: 111,
          provinceId: 11,
          regionId: 2256,
          streetId: 12045027,
        }
      })

      .then(res => (commit(type.GET_HOME, res.data.data)))
      .catch(err => console.log(err))
  },
  getMainNav({
    commit
  }) {
    axios.get('/ehaier/sg/cms/revision/getCategory.json', {
        params: {
          type: 3
        }
      })

      .then(res => ( commit(type.GET_MAINNAV, res.data.data)))
      .catch(err => console.log(err))
  },
  getMainContent({
    commit
  },id) {
    axios.get('/ehaier/sg/cms/revision/getTopic.json', {
        params: {
          categoryId: id,
          pageIndex: 1,
          pageSize: 10,
        }
      })

      .then(res => (commit(type.GET_MAINCONTENT, res.data.data)))
      .catch(err => console.log(err))
  },
}

export default {
  state,
  mutations,
  actions
}