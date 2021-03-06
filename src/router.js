import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Connection from '@/views/Connection/Connection'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/connexion',
      name: 'connection',
      component: Connection
    }
  ]
})
