import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarsView from "@/views/CarsView.vue";
import AboutView from "@/views/AboutView.vue";
import AtmsView from "@/views/AtmsView.vue";
import AtmLocationView from "@/views/AtmLocationView.vue";
import LibrariesView from "@/views/LibrariesView.vue";
import LoginView from "@/views/LoginView.vue";
import EditLocationView from "@/views/EditLocationView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/login',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/admin/edit/location',
    name: 'editLocationRoute',
    component: EditLocationView
  },
  {
    path: '/libraries',
    name: 'librariesRoute',
    component: LibrariesView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
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
