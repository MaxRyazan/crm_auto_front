<template>
    <app-order-category :orderCategoryArray="store.state.markedOrders" :path="`marked-orders`"><router-link to="/" style="text-decoration: none">Главная / </router-link>Помеченные заказы</app-order-category>
</template>

<script setup>
import {onMounted} from "vue";
import store from "@/store/store";
import AppOrderCategory from "@/components/AppOrderCategory";

onMounted(() => {
    store.dispatch('findMarkedOrders')
})

</script>
