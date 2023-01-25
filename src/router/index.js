import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarsView from "@/views/CarsView.vue";
import AboutView from "@/views/AboutView.vue";
import AtmsView from "@/views/AtmsView.vue";
import AtmLocationView from "@/views/AtmLocationView.vue";
import LibrariesView from "@/views/LibrariesView.vue";
import LoginView from "@/views/LoginView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/libraries',
    name: 'librariesRoute',
    component: LibrariesView
  },
  {
    path: '/atm/location',
    name: 'atmLocationRoute',
    component: AtmLocationView
  },
    {
    path: '/cars',
    name: 'carsRoute',
    component: CarsView
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
