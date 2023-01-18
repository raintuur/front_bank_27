import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarsView from "@/views/CarsView.vue";
import AboutView from "@/views/AboutView.vue";

Vue.use(VueRouter)

const routes = [
{
  path: '/cars',
  name: 'carsRoute',
  component: CarsView
},

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
    component: AboutView
  }
]

const router = new VueRouter({
  routes
})

export default router
