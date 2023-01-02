<template>
    <div class="item_container id">{{order.id}}</div>
    <div class="item_container">{{order.client_FIO}}</div>
    <div class="item_container">{{order.timeOfCreation}}</div>
    <div class="item_container">
        <div class="details" v-for="detail in order.details" :key="detail.id">
            <div class="inline">
                <span class="detail_title">Id детали:</span>
                <div class="detail_param">{{detail.id}}</div>
            </div>
            <div class="inline">
                <span class="detail_title">Название:</span>
                <div class="detail_param">{{detail.name}}</div>
            </div>
            <div class="inline">
                <span class="detail_title">Артикул:</span>
                <div class="detail_param">{{detail.article}}</div>
            </div>
            <div class="inline">
                <span class="detail_title">Vin:</span>
                <div class="detail_param">{{detail.vin}}</div>
            </div>
            <div class="inline">
                <span class="detail_title">Цена:</span>
                <div class="detail_param">{{detail.price}} &#8381;</div>
            </div>
        </div>
    </div>
    <div class="item_container">{{order.sum}}  &#8381;</div>
</template>
<script>
export default {
    name: 'AppOrder',
    props: {
        order: {}
    }
}
</script>
<style scoped lang="scss">
</style>