<template>
    <div class="flex_around_container order">
        <app-order :order="order" />
    </div>
</template>

<script setup>
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import AppOrder from "@/components/AppOrder";
import {computed} from "vue";

const route = useRoute().params.id
const store = useStore()

const order = computed(() => {
    return store.state.allOrders.find(order => order.id === +route)
})
</script>
