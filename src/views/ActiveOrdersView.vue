<template>
    <div>All orders view</div>
    <div v-for="order in store.state.activeOrders" :key="order.id">
        <div>{{order.details}}</div>
    </div>
</template>

<script setup>
import {onMounted} from "vue";
import store from "@/store/store";

onMounted(() => {
    store.dispatch('findAllOrders')
})
</script>
