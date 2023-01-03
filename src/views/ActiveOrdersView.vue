<template>
    <app-order-category :orderCategoryArray="store.state.activeOrders" :path="`active-orders`"><router-link to="/" style="text-decoration: none">Главная / </router-link>Активные заказы</app-order-category>
</template>

<script setup>
import {onMounted} from "vue";
import store from "@/store/store";

import AppOrderCategory from "@/components/AppOrderCategory";

onMounted(() => {
    store.dispatch('findActiveOrders')
})

</script>
