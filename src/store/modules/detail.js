import axios from 'axios'
import * as type from '@store/type'

const state = {
 detail:[],
 merchant:[],
 product:[],
 shops:[]

}

const mutations = {
  [type.GET_DETAIL]: (state, payload) => {
    state.detail = payload
  },
  [type.GET_MERCHANT]: (state, payload) => {
    state.merchant = payload
  },
  [type.GET_PRODUCT]: (state, payload) => {
    state.product = payload
  },
  [type.GET_SHOPS]: (state,payload) => {
    state.shops = payload
  }

}

const actions = {
  getDetail({
    commit
  },id) {
    axios.get('/detailEhaier/item/purchase/'+ id +'.json', {
        params: {
          storeId: 33284185
        }
      })

      .then(res => (commit(type.GET_DETAIL, res.data.data)))
      .catch(err => console.log(err))
  },getProduct({
    commit
  },id) {
    axios.get('/detailEhaier/item/purchase/'+ id +'.json', {
        params: {
          storeId: 33284185
        }
      })

      .then(res => (commit(type.GET_PRODUCT, res.data.data.product)))
      .catch(err => console.log(err))
  },
  getMerchant({
    commit
  },id) {
    axios.get('/detailEhaier/item/purchase/checkStock.json', {
        params: {
          sku: 'ZRTGH0017',
          prodId: id,
          regionId: 2256,
          number: 1,
          provinceId: 11,
          cityId: 111,
          pcrName: '江苏 南京 建邺区/建邺区新城科技园',
          memberId: 20219251,
          streetId: 12045027,
          skku: '',
        }
      })

      .then(res => (commit(type.GET_MERCHANT, res.data.data)))
      .catch(err => console.log(err))
  },getShops({
    commit
  },id) {
    axios.get('/detailEhaier/item/purchase/checkStock.json', {
        params: {
          sku: 'ZRTGH0017',
          prodId: id,
          regionId: 2256,
          number: 1,
          provinceId: 11,
          cityId: 111,
          pcrName: '江苏 南京 建邺区/建邺区新城科技园',
          memberId: 20219251,
          streetId: 12045027,
          skku: '',
        }
      })

      .then(res => (commit(type.GET_SHOPS, res.data.data.o2OStoreInfo)))
      .catch(err => console.log(err))
  }
}

export default {
  state,
  mutations,
  actions
}