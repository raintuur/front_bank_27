import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarsView from "@/views/CarsView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/cars',
    name: 'carsRoute',
    component: CarsView
  },
  {
    path: '/',
    name: 'homeRoute',
    component: HomeView
  },
  {
    path: '/about',
    name: 'aboutRoute',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
