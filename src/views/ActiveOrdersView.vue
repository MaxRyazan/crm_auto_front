<template>
    <h3 class="title">Активные заказы:</h3>
    <div v-for="order in store.state.activeOrders" :key="order.id" class="flex_around_container order">
        <app-order :order="order"/>
        <app-button @click="$router.push(`/active-orders/${order.id}`)">Просмотреть</app-button>
    </div>
</template>

<script setup>
import {onMounted} from "vue";
import store from "@/store/store";
import AppButton from "@/components/AppButton";
import AppOrder from "@/views/AppOrder";

onMounted(() => {
    store.dispatch('findAllOrders')
})
</script>
<style scoped lang="scss">
    .item_container{
        max-height: 150px;
        overflow-y: auto;
        font-family: cursive;
        padding: 10px 0;
        width: 20%;
        text-align: center;
    }

    .detail{
      position: relative;
      width: 20%;
      display: flex;
      flex-direction: column;
    }
</style>