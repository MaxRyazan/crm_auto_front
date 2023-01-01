<template>
    <div class="order_container">
        <button class="close_modal" @click="$router.push('/')">x</button>
        <div class="flex_around_container">
            {{ timeNow }}
            <div>Default manager</div>
        </div>
        <div class="order_list">
            <h3>Список запчастей:</h3>
            <app-table :details="state.orderDetails" :in-order="true"/>
            <div class="flex_around_container ">
                <h4>Сумма заказа: {{ sum }}  &#8381;</h4>
                <app-button @action="createOrder">Создать заказ</app-button>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useStore } from 'vuex'
import AppTable from "@/components/AppTable";
import AppButton from "@/components/AppButton";
import router from "@/router/router";

const store = useStore()
const state = store.state
const getters = store.getters
const timeNow = getters.showDateTimeNow
const sum =  store.getters.calculateSum

const createOrder =  async  () => {

    const order = {
        client_FIO: 'user',
        details : state.orderDetails,
        timeOfCreation: timeNow,
        timeOfDeadLine: '',
        sum: sum
    }

    await fetch('http://localhost:8080/details/api/v1/order-new', {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
})
    state.orderDetails = []
    await router.push('/')
}

</script>
