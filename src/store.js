import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: sessionStorage.getItem('user.id') || null,
      email: sessionStorage.getItem('user.email') || null,
      name: sessionStorage.getItem('user.name') || null,
      token: sessionStorage.getItem('user.token') || null
    }
  },
  getters: {
    isAuthenticated: function (state) {
      return state.hasOwnProperty('user') &&
        state.user !== null &&
        state.user.hasOwnProperty('token') &&
        state.user.token !== null
    }
  },
  mutations: {
    setuser: function (state, user) {
      state.user = user
    }
  },
  actions: {
    signIn: function ({ commit }, user) {
      sessionStorage.setItem('user.id', user.id)
      sessionStorage.setItem('user.email', user.email)
      sessionStorage.setItem('user.name', user.name)
      sessionStorage.setItem('user.token', user.token)
      commit('setuser', user)
    },
    logOut: function ({ commit }) {
      commit('setuser', null)
      sessionStorage.removeItem('user.id')
      sessionStorage.removeItem('user.email')
      sessionStorage.removeItem('user.name')
      sessionStorage.removeItem('user.token')
    }
  }
})
