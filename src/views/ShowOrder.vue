<template>
    <div class="flex_around_container order">
        <app-order :order="order[0]" />
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import {useRoute} from "vue-router";
import {computed, onMounted} from "vue";
import AppOrder from "@/views/AppOrder";

onMounted(() => {
    store.dispatch('findAllOrders')
})
const route = useRoute().params.id
const store = useStore()

const order = computed(() => {
     return [...store.state.activeOrders].filter(order => order.id === +route)
})
</script>
