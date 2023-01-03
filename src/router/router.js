import MainView from '@/views/MainView'
import OrderView from '@/views/OrderView'
import ActiveOrdersView from '@/views/ActiveOrdersView'
import ShowOrder from '@/views/ShowOrder'
import DeadlineOrdersView from '@/views/DeadlineOrdersView'
import MarkedOrdersView from '@/views/MarkedOrdersView'
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
        path: '/orders/:id',
        component: ShowOrder
    },
    {
        path: '/active-orders',
        component: ActiveOrdersView
    },
    {
        path: '/deadline-orders',
        component: DeadlineOrdersView
    },
    {
        path: '/marked-orders',
        component: MarkedOrdersView
    }
]

const router = createRouter({
        routes,
        history: createWebHistory()
})

export default router;