<template>
    <div class="main_container">

        <div class="personal_data">
            <app-personal-data />
        </div>

        <div class="buttons_container">
            <app-button @action="store.commit('showTodayOrders')">Сегодняшние заказы</app-button>
            <app-button @action="store.commit('showAllActiveOrders')">Все активные заказы</app-button>
            <app-button @action="store.commit('showOrdersHistory')">История заказов</app-button>
        </div>

        <div class="inputs_container">
            <app-input placeholder="Поиск по артикулу"
                       v-model="state.article"
                       @action="store.dispatch('findBy', 'Article')"
            />
            <app-input placeholder="Поиск по производителю"
                       v-model="state.manufacturer"
                       @action="store.dispatch('findBy', 'Manufacturer')"
            />
            <app-input placeholder="Поиск по названию"
                       v-model="state.name"
                       @action="store.dispatch('findBy', 'Name')"
            />
        </div>

        <div class="inputs_container">
            <app-input placeholder="Поиск по vin"
                       v-model="state.vin"
                       @action="store.dispatch('findBy', 'Vin')"
            />
            <app-input placeholder="Поиск по марке машины"
                       v-model="state.carMark"
                       @action="store.dispatch('findBy', 'CarMark')"
            />
            <app-button class="btn_red" @action="store.commit('clearTable')">Очистить таблицу</app-button>
        </div>

        <div class="tables_container">
            <app-table class="w49" :details="state.allDetails"/>
            <app-table class="w49"  :details="state.orderDetails"/>
        </div>
    </div>
</template>

<script setup>
import AppButton from '@/components/AppButton'
import AppPersonalData from "@/components/AppPersonalData";
import AppInput from '@/components/AppInput'
import { useStore } from 'vuex'
import AppTable from '@/components/AppTable'

const store = useStore()
const state = store.state


</script>
