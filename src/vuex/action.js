
export default {
  watchRoute({state, commit}, data) {
    commit('watchRoute', data)
  },
  getPullData({state, commit}, data) {
    commit('getPullData', data)
  }
}