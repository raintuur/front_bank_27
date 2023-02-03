import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AtmsView from "@/views/AtmsView.vue";
import AtmLocationView from "@/views/AtmLocationView.vue";
import LoginView from "@/views/LoginView.vue";
import ErrorView from "@/views/ErrorView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/error',
    name: 'errorRoute',
    component: ErrorView
  },

  {
    path: '/login',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/atm/location',
    name: 'atmLocationRoute',
    component: AtmLocationView
  },
  {
    path: '/atms',
    name: 'atmsRoute',
    component: AtmsView
  },
  {
    path: '/',
    name: 'homeRoute',
    component: HomeView
  }
]

const router = new VueRouter({
  routes
})

export default router
