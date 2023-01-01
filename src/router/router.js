import MainView from '@/views/MainView'
import OrderView from '@/views/OrderView'
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path: '/',
        component: MainView
    },
    {
        path: '/order',
        component: OrderView
    }
]

const router = createRouter({
        routes,
        history: createWebHistory()
})

export default router;