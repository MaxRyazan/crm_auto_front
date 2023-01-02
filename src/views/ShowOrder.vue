<template>
    <div>{{ order }}</div>
</template>

<script setup>
import { useStore } from "vuex";
import {useRoute} from "vue-router";
import {computed, onMounted} from "vue";

onMounted(() => {
    store.dispatch('findAllOrders')
})
const route = useRoute().params.id
const store = useStore()

const order = computed(() => {
     return [...store.state.activeOrders].filter(order => order.id === +route)
})
</script>
