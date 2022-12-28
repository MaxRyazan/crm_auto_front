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
            <div class="one_table_container table_left" v-for="detail in state.allDetails" :key="detail.id">
                <div class="table_first_row">
                    <div class="table_title cell id"><span>Id</span></div>
                    <div class="table_title cell"><span>Название</span></div>
                    <div class="table_title cell vin"><span>VIN</span></div>
                    <div class="table_title cell"><span>Артикул</span></div>
                    <div class="table_title cell"><span>Производитель</span></div>
                    <div class="table_title cell car_mark"><span>Марка</span></div>
                    <div class="table_title cell description"><span>Описание</span></div>
                </div>
                <app-table :detail="detail"/>
            </div>
            <div class="one_table_container table_right">
                <div class="table_first_row">
                    <div class="table_title cell id"><span>Id</span></div>
                    <div class="table_title cell"><span>Название</span></div>
                    <div class="table_title cell vin"><span>VIN</span></div>
                    <div class="table_title cell"><span>Артикул</span></div>
                    <div class="table_title cell"><span>Производитель</span></div>
                    <div class="table_title cell car_mark"><span>Марка</span></div>
                    <div class="table_title cell description"><span>Описание</span></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import AppButton from '@/components/AppButton'
import AppPersonalData from "@/components/AppPersonalData";
import AppInput from '@/components/AppInput'
import { ref } from 'vue'
import { useStore } from 'vuex'
import AppTable from '@/components/AppTable'

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
