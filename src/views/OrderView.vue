<template>
    <div class="order_container">
        <button class="close_modal" @click="$router.push('/')">x</button>
        <div class="flex_around_container">
            {{ getters.showDateTimeNow }}
            <div>Default manager</div>
        </div>
        <div class="order_list">
            <h3>Список запчастей:</h3>
            <app-table :details="state.orderDetails" :in-order="true"/>
            <div class="flex_around_container ">
                <h4>Сумма заказа: {{ store.getters.calculateSum }}  &#8381;</h4>
                <app-button @action="log">Создать заказ</app-button>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useStore } from 'vuex'
import AppTable from "@/components/AppTable";
import AppButton from "@/components/AppButton";

const store = useStore()
const state = store.state
const getters = store.getters

const log =() =>{
    console.log('1111')
}

</script>
