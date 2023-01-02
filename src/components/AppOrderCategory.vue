<template>
    <h3 class="title">
        <slot/>
    </h3>
    <div v-for="order in orderCategoryArray" :key="order.id" class="flex_around_container order">
        <app-order :order="order"/>
        <div class="orders_buttons">
            <app-button @click="$router.push(`/${path}/${order.id}`)">Просмотреть</app-button>
            <app-button class="btn_close_order" @click="$emit('closeOrder', order)">Закрыть</app-button>
        </div>
    </div>
</template>
<script setup>

import AppButton from "@/components/AppButton";
import AppOrder from "@/components/AppOrder";
import {defineProps, defineEmits } from 'vue'


defineEmits(['closeOrder'])
defineProps({

    orderCategoryArray:{
        type: Array,
        required: true
    },
    path:{
        type: String,
        required: true
    }
})

</script>
