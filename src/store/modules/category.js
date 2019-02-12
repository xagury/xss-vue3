import axios from 'axios'
import * as type from '@store/type'

const state = {
  listnav: [],
  listcontent: [],


}

const mutations = {
  [type.GET_LISTNAV]: (state, payload) => {
    state.listnav = payload
  },
  [type.GET_LISTCONTENT]: (state, payload) => {
    state.listcontent = payload
  }

}

const actions = {
  getListNav({
    commit
  }) {
    axios.get('/ehaier/sg/cms/navigation/getNavigations.json', {
        params: {
          parentId: 0,
          timer: Date.now()
        }
      })

      .then(res => (console.log(res.data.data), commit(type.GET_LISTNAV, res.data.data)))
      .catch(err => console.log(err))
  },
  getListContent({
    commit
  }, id) {
    axios.get('/ehaier/sg/cms/navigation/getNavigations.json', {
        params: {
          parentId: id,
          timer: Date.now()
        }
      })

      .then(res => (console.log(res.data.data),commit(type.GET_LISTCONTENT, res.data.data)))
      .catch(err => console.log(err))
  },
}

export default {
  state,
  mutations,
  actions
}