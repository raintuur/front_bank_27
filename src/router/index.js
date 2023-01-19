import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue';
import MemesView from "@/views/MemesView.vue";
import AboutView from "@/views/AboutView.vue";
import CarsView from "@/views/CarsView.vue";
import AtmsView from "@/views/AtmsView.vue";

Vue.use(VueRouter)

const routes = [
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
    },
  {
    path: '/memes',
    name: 'memesRoute',
    component: MemesView
  }
]

const router = new VueRouter({
  routes
})

export default router
