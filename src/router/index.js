import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DogsView from "@/views/DogsView.vue";
import AboutView from "@/views/AboutView.vue";
import AtmsView from "@/views/AtmsView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeRoute',
    component: HomeView
  },
  {
    path: '/atms',
    name: 'atmsRoute',
    component: AtmsView
  },
  {
    path: '/dogs',
    name: 'dogsRoute',
    component: DogsView
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
