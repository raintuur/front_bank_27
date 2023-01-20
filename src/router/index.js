import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarsView from '@/views/CarsView.vue';
import AtmsView from "@/views/AtmsView.vue";
import AtmLocationView from "@/views/AtmLocationView.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'homeRoute',
        component: HomeView
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
        path: '/atm/location',
        name: 'atmLocationRoute',
        component: AtmLocationView
    }

]

const router = new VueRouter({
    routes
})

export default router
