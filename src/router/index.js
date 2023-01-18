import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import taevakehadView from "@/views/TaevakehadView.vue";
import AboutView from "@/views/AboutView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/taevakehad',
    name: 'taevakehadRoute',
    component: taevakehadView

  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView

  }
]

const router = new VueRouter({
  routes
})

export default router
