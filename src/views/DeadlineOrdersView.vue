<template>
    <app-order-category :orderCategoryArray="store.state.deadLineOrders" :path="`deadline-orders`"><router-link to="/" style="text-decoration: none">Главная / </router-link>Просроченные заказы</app-order-category>
</template>

<script setup>
import {onMounted} from "vue";
import store from "@/store/store";
import AppOrderCategory from "@/components/AppOrderCategory";

onMounted(() => {
    store.dispatch('findDeadLineOrders')
})

</script>
