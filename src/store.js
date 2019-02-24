import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: {
      id: sessionStorage.getItem('player.id') || null,
      email: sessionStorage.getItem('player.email') || null,
      name: sessionStorage.getItem('player.name') || null,
      token: sessionStorage.getItem('player.token') || null
    }
  },
  getters: {
    isAuthenticated: function (state) {
      return state.hasOwnProperty('player') &&
        state.player !== null &&
        state.player.hasOwnProperty('token') &&
        state.player.token !== null
    }
  },
  mutations: {
    setPlayer: function (state, player) {
      state.player = player
    }
  },
  actions: {
    signIn: function ({ commit }, player) {
      sessionStorage.setItem('player.id', player.id)
      sessionStorage.setItem('player.email', player.email)
      sessionStorage.setItem('player.name', player.name)
      sessionStorage.setItem('player.token', player.token)
      commit('setPlayer', player)
    },
    logOut: function ({ commit }) {
      commit('setPlayer', null)
      sessionStorage.removeItem('player.id')
      sessionStorage.removeItem('player.email')
      sessionStorage.removeItem('player.name')
      sessionStorage.removeItem('player.token')
    }
  }
})
