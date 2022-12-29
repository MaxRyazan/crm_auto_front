<template>
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
        <div v-for="detail in details" :key="detail.id">
            <div class="table_first_row">
                <div class=" cell id">{{detail.id}}</div>
                <div class=" cell">{{detail.name}}</div>
                <div class=" cell vin">{{detail.vin}}</div>
                <div class=" cell">{{detail.article}}</div>
                <div class=" cell">{{detail.manufacturer}}</div>
                <div class="column">
                    <div class=" mark" v-for="mark in detail.carMarks" :key="mark">{{ mark }}</div>
                </div>
                <div class="cell description">{{detail.description}}</div>
                <img src="@/assets/images/arrow.png" alt="" class="select">
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['details'])
</script>

