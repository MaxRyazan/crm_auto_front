import MainView from '@/views/MainView'
import OrderView from '@/views/OrderView'
import ActiveOrdersView from '@/views/ActiveOrdersView'
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path: '/',
        component: MainView
    },
    {
        path: '/order',
        component: OrderView
    },
    {
        path: '/active-orders',
        component: ActiveOrdersView
    }
]

const router = createRouter({
        routes,
        history: createWebHistory()
})

export default router;