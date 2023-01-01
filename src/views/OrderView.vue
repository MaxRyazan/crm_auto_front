<template>
    <div class="order_container" v-for="detail in state.orderDetails" :key="detail.id">
        <div>{{detail.name}}</div>
        <div>{{detail.vin}}</div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const state = store.state
</script>
