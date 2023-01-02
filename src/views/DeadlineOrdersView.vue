<template>
    <app-order-category :orderCategoryArray="store.state.deadLineOrders" :path="`deadline-orders`" @closeOrder="closeOrder">Активные заказы</app-order-category>
</template>

<script setup>
import {onMounted} from "vue";
import store from "@/store/store";
import AppOrderCategory from "@/components/AppOrderCategory";

onMounted(() => {
    store.dispatch('findDeadLineOrders')
})

const closeOrder = (order) => {
    order.status = 'CLOSED'
    store.state.deadLineOrders = store.state.deadLineOrders.filter(o => o.id !== order.id)
    fetch('http://localhost:8080/details/api/v1/order-new', {
        method: 'POST',
        body: JSON.stringify(order)
    })
}
</script>
