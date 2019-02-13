import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import home from './modules/home'
import category from './modules/category'
import cars from './modules/cars'
import user from './modules/user'
import detail from './modules/detail'


export default new Vuex.Store({
  modules: {
    home,
    category,
    cars,
    user,
    detail,

  }
})
