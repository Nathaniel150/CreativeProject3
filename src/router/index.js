import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Hired from '../views/Hired.vue'
import ListHired from '../views/ListHired.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/hired/:id',
    name: 'Hired',
    component: Hired,
  },
  {
    path: '/listhired',
    name: 'ListHired',
    component: ListHired,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
