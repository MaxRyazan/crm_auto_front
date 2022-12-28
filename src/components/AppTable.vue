<template>
    <div class="inline">
        <h4 class="table_title cell id">{{ detail.id }}</h4>
        <h4 class="table_title cell">{{ detail.name }}</h4>
        <h4 class="table_title cell vin">{{ detail.VIN }}</h4>
        <h4 class="table_title cell">{{ detail.article}}</h4>
        <h4 class="table_title cell">{{ detail.manufacturer }}</h4>
        <h4 class="table_title cell car_mark">{{ detail.carMark }}</h4>
        <h4 class="table_title cell description">{{ detail.description }}</h4>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps(['detail'])

</script>
