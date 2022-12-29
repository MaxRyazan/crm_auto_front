<template>
    <div class="main_container">

        <div class="personal_data">
            <app-personal-data />
        </div>

        <div class="buttons_container">
            <app-button @action="showTodayOrders">Сегодняшние заказы</app-button>
            <app-button @action="showAllActiveOrders">Все активные заказы</app-button>
            <app-button @action="showOrdersHistory">История заказов</app-button>
        </div>

        <div class="inputs_container">
            <app-input placeholder="Поиск по артикулу"
                       v-model="article"
                       @action="findByArticle"
            />
            <app-input placeholder="Поиск по производителю"
                       v-model="manufacturer"
                       @action="findByManufacturer"
            />
            <app-input placeholder="Поиск по названию"
                       v-model="name"
                       @action="findByName"
            />
        </div>

        <div class="inputs_container">
            <app-input placeholder="Поиск по vin"
                       v-model="vin"
                       @action="findByVin"
            />
            <app-input placeholder="Поиск по марке машины"
                       v-model="carMark"
                       @action="findByCarMark"
            />
            <app-button class="btn_red" @action="clearTable">Очистить таблицу</app-button>
        </div>
        <div class="tables_container">
            <div class="one_table_container table_left">
                <app-table :details="state.allDetails"/>
            </div>
            <div class="one_table_container table_right">
                <app-table :details="state.orderDetails"/>
            </div>
        </div>

    </div>
</template>

<script setup>
import AppButton from '@/components/AppButton'
import AppPersonalData from "@/components/AppPersonalData";
import AppInput from '@/components/AppInput'
import {onMounted, ref} from 'vue'
import { useStore } from 'vuex'
import AppTable from '@/components/AppTable'

onMounted(async () => {
    state.allDetails = await store.dispatch('getAllDetails')
})
const store = useStore()
const state = store.state

const article = ref('')
const manufacturer = ref('')
const name = ref('')
const vin = ref('')
const carMark = ref('')

const showTodayOrders = () => {

}

const showAllActiveOrders = () => {

}

const showOrdersHistory = () => {

}

const clearTable = () => {

}

const findByArticle = (article) => {
    console.log(article)
}

const findByManufacturer = (manufacturer) => {
    console.log(manufacturer)
}
const findByName = (name) => {
    console.log(name)
}
const findByVin = (vin) => {
    console.log(vin)
}
const findByCarMark = (carMark) => {
    console.log(carMark)
}
</script>
