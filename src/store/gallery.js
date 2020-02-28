import {axiosRequest} from '@/Common/axios'
let state = {
  goodlist: []
}

let mutations = {
  changeGood (state, data) {
    state.goodlist = data
  }
}

let actions = {
  getlist (aa) {
    axiosRequest({
      url: '/friend',
      method: 'get'
    }).then(res => {
      aa.commit('changeGood', res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }
}

let getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}
