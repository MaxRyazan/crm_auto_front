<template>
    <div class="one_table_container table_right">
        <app-table-header/>
        <transition-group name="fade">
            <div v-for="detail in details" :key="detail.id">
                <div class="table_first_row">
                    <div class=" cell id">{{detail.id}}</div>
                    <div class=" cell">{{detail.name}}</div>
                    <div class=" cell vin">{{detail.vin}}</div>
                    <div class=" cell">{{detail.article}}</div>
                    <div class=" cell">{{detail.manufacturer}}</div>
                    <div class="column">
                        <div class="mark" v-for="mark in detail.carMarks" :key="mark">{{ mark }}</div>
                    </div>
                    <div class=" cell">{{detail.price}} &#8381;</div>
                    <div class="inline description">
                        <div class="cell" @click="openModal = true">{{detail.description}}</div>
                        <img v-if="inOrder"
                             src="@/assets/images/arrow.png" alt=""
                             class="select"
                             title="В заказ"
                             @click="store.commit('addToOrder', detail.id)"
                        >
                        <img v-else
                             src="@/assets/images/cross.png" alt=""
                             class="select"
                             title="В заказ"
                             @click="store.commit('deleteThisFromOrder', detail.id)"
                        >
                    </div>
                    <AppDescriptionModal :detail="detail" v-if="openModal" @closeModal="openModal = false"/>
                </div>
            </div>
        </transition-group>
        <div v-if="!inOrder && state.orderDetails.length" class="confirm_order">
            <div class="data_title">Сумма заказа: {{ store.getters.calculateSum }}</div>
            <app-button  v-if="!inOrder" @click="$router.push('/order')">Оформить</app-button>
        </div>
    </div>
</template>
<script setup>
import {defineProps, ref} from 'vue'
import AppButton from '@/components/AppButton'
import AppTableHeader from "@/components/AppTableHeader";
import {useStore} from "vuex";
import AppDescriptionModal from "@/components/AppDescriptionModal";


const store = useStore()
const state = store.state
let openModal = ref(false)

defineProps({
    details:{
        type: Array,
        required: true
    },
    inOrder: {
        type: Boolean,
        required: false,
        default: false
    }
})

</script>

