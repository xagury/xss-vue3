import axios from 'axios'
import * as type from '@store/type'

const state = {
  cars: []

}

const mutations = {
  [type.GET_CARS]: (state, cars) => {
    state.cars = cars
  },

}

const actions = {
  initCar({
    commit
  }) {
    let cars = getCars();
    commit(type.GET_CARS, cars)
  },
  addCar({
    commit
  }, payload) {

    setTimeout(() => {
      let cars = getCars();
      let isHas = cars.some(item => {
        if (item.id === payload.id) {
          item.num++
          return true
        }
      })
      if (!isHas) {
        payload.num = 1
        cars.push(payload)
      }
      localStorage.cars = JSON.stringify(cars)
      commit(type.GET_CARS, cars)
    }, 200)
  },
  reduceCar({
    commit
  }, payload) {
    setTimeout(() => {
      let cars = getCars();
      cars = cars.filter((item) => {
        if (item.id === payload.id) {
          item.num--
          if (item.num <= 0) {
            return false
          }
        }
        return true
      })
      localStorage.cars = JSON.stringify(cars)
      commit(type.GET_CARS, cars)
    }, 200)
  },
  delCar({
    commit
  }, payload) {
    setTimeout(() => {
      let cars = getCars();
      let isHas = cars.some(item => {
        if (item.id === payload.id) {
          return true

        }
        return false
      })
      if (isHas) {
        cars.splice(payload,1)
      }
      localStorage.cars = JSON.stringify(cars)
      commit(type.GET_CARS, cars)
    }, 200)
  }

}


const getters = {
  total: (state) => {
    let total = {
      num: 0,
      price: 0
    }
    state.cars.forEach(item => {
      total.num += item.num
      total.price += item.num * item.pcPrice
    })
    return total
  }
}

function getCars() {
  return JSON.parse(localStorage.cars ? localStorage.cars : '[]')
}

export default {
  state,
  mutations,
  actions,
  getters
}