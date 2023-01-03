<template>
    <app-order-category :orderCategoryArray="store.state.activeOrders" :path="`active-orders`">Активные заказы</app-order-category>
</template>

<script setup>
import {onMounted} from "vue";
import store from "@/store/store";

import AppOrderCategory from "@/components/AppOrderCategory";

onMounted(() => {
    store.dispatch('findActiveOrders')
})

</script>
