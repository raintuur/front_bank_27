import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarsView from "@/views/CarsView.vue";
import AboutView from "@/views/AboutView.vue";
import AtmsView from "@/components/atm/AtmsView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/cars',
    home: 'carsRoute',
    component: CarsView
  },
  {
    path: '/atms',
    home: 'atmsRoute',
    component: AtmsView
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
