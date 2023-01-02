<template>
    <h3 class="title">Активные заказы:</h3>
    <div v-for="order in store.state.activeOrders" :key="order.id" class="flex_around_container order">
        <div class="item_container id">{{order.id}}</div>
        <div class="item_container">{{order.client_FIO}}</div>
        <div class="item_container">{{order.timeOfCreation}}</div>
        <div class="item_container">
            <div class="details" v-for="detail in order.details" :key="detail.id">
                <div class="inline">
                    <span class="detail_title">Id детали:</span>
                    <div class="detail_param">{{detail.id}}</div>
                </div>
                <div class="inline">
                    <span class="detail_title">Название:</span>
                    <div class="detail_param">{{detail.name}}</div>
                </div>
                <div class="inline">
                    <span class="detail_title">Артикул:</span>
                    <div class="detail_param">{{detail.article}}</div>
                </div>
                <div class="inline">
                    <span class="detail_title">Vin:</span>
                    <div class="detail_param">{{detail.vin}}</div>
                </div>
                <div class="inline">
                    <span class="detail_title">Цена:</span>
                    <div class="detail_param">{{detail.price}} &#8381;</div>
                </div>
            </div>
        </div>
        <div class="item_container">{{order.sum}}  &#8381;</div>
        <app-button @click="$router.push(`/active-orders/${order.id}`)">Просмотреть</app-button>
    </div>
</template>

<script setup>
import {onMounted} from "vue";
import store from "@/store/store";
import AppButton from "@/components/AppButton";

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
        &.id{
            width: 7%;
         }
      &.details{
        display: flex;
        flex-direction: column;
        text-align: start;
      }
    }
    .detail_title{
      width: 40%;
    }
    .detail_param{
      width: 60%;
    }
    .detail{
      position: relative;
      width: 20%;
      display: flex;
      flex-direction: column;
    }
    .details{
      border: 2px solid teal;
      margin-bottom: 2px;
    }
</style>