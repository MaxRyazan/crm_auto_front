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
                <div class="inline description">
                    <div class="cell" @click="openModal = true">{{detail.description}}</div>
                    <img v-if="inOrder"
                         src="@/assets/images/arrow.png" alt=""
                         class="select"
                         title="В заказ"
                         @click="$emit('addToOrder', detail.id)"
                    >
                    <img v-else
                         src="@/assets/images/cross.png" alt=""
                         class="select"
                         title="В заказ"
                         @click="$emit('deleteFromOrder', detail.id)"
                    >
                </div>
            </div>
            <div v-if="!inOrder" class="confirm_order">
                <div class="data_title">Сумма заказа:</div>
                <app-button  v-if="!inOrder">Оформить</app-button>
            </div>
        </div>
        </transition-group>
        <div class="modal" v-if="openModal">
            <button class="close_modal" @click="openModal = false">x</button>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dicta fugit maiores perspiciatis rem.
            Aspernatur assumenda, blanditiis explicabo facilis fuga magni minima quidem veniam. Assumenda cum distinctio
            dolor dolore dolores fuga, provident? Aliquid eaque eum explicabo possimus! Accusantium
            aliquid dolor doloribus exercitationem fugiat hic inventore odit repudiandae, sequi? Corporis, mollitia!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dicta fugit maiores perspiciatis rem.
            Aspernatur assumenda, blanditiis explicabo facilis fuga magni minima quidem veniam. Assumenda cum distinctio
            dolor dolore dolores fuga, provident? Aliquid eaque eum explicabo possimus! Accusantium
            aliquid dolor doloribus exercitationem fugiat hic inventore odit repudiandae, sequi? Corporis, mollitia!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dicta fugit maiores perspiciatis rem.
            Aspernatur assumenda, blanditiis explicabo facilis fuga magni minima quidem veniam. Assumenda cum distinctio
            dolor dolore dolores fuga, provident? Aliquid eaque eum explicabo possimus! Accusantium
            aliquid dolor doloribus exercitationem fugiat hic inventore odit repudiandae, sequi? Corporis, mollitia!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dicta fugit maiores perspiciatis rem.
            Aspernatur assumenda, blanditiis explicabo facilis fuga magni minima quidem veniam. Assumenda cum distinctio
            dolor dolore dolores fuga, provident? Aliquid eaque eum explicabo possimus! Accusantium
            aliquid dolor doloribus exercitationem fugiat hic inventore odit repudiandae, sequi? Corporis, mollitia!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dicta fugit maiores perspiciatis rem.
            Aspernatur assumenda, blanditiis explicabo facilis fuga magni minima quidem veniam. Assumenda cum distinctio
            dolor dolore dolores fuga, provident? Aliquid eaque eum explicabo possimus! Accusantium
            aliquid dolor doloribus exercitationem fugiat hic inventore odit repudiandae, sequi? Corporis, mollitia!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dicta fugit maiores perspiciatis rem.
            Aspernatur assumenda, blanditiis explicabo facilis fuga magni minima quidem veniam. Assumenda cum distinctio
            dolor dolore dolores fuga, provident? Aliquid eaque eum explicabo possimus! Accusantium
            aliquid dolor doloribus exercitationem fugiat hic inventore odit repudiandae, sequi? Corporis, mollitia!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dicta fugit maiores perspiciatis rem.
            Aspernatur assumenda, blanditiis explicabo facilis fuga magni minima quidem veniam. Assumenda cum distinctio
            dolor dolore dolores fuga, provident? Aliquid eaque eum explicabo possimus! Accusantium
            aliquid dolor doloribus exercitationem fugiat hic inventore odit repudiandae, sequi? Corporis, mollitia!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dicta fugit maiores perspiciatis rem.
            Aspernatur assumenda, blanditiis explicabo facilis fuga magni minima quidem veniam. Assumenda cum distinctio
            dolor dolore dolores fuga, provident? Aliquid eaque eum explicabo possimus! Accusantium
            aliquid dolor doloribus exercitationem fugiat hic inventore odit repudiandae, sequi? Corporis, mollitia!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dicta fugit maiores perspiciatis rem.
            Aspernatur assumenda, blanditiis explicabo facilis fuga magni minima quidem veniam. Assumenda cum distinctio
            dolor dolore dolores fuga, provident? Aliquid eaque eum explicabo possimus! Accusantium
            aliquid dolor doloribus exercitationem fugiat hic inventore odit repudiandae, sequi? Corporis, mollitia!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dicta fugit maiores perspiciatis rem.
            Aspernatur assumenda, blanditiis explicabo facilis fuga magni minima quidem veniam. Assumenda cum distinctio
            dolor dolore dolores fuga, provident? Aliquid eaque eum explicabo possimus! Accusantium
            aliquid dolor doloribus exercitationem fugiat hic inventore odit repudiandae, sequi? Corporis, mollitia!
        </div>
    </div>
</template>
<script setup>
import {defineEmits, defineProps, ref} from 'vue'
import AppButton from '@/components/AppButton'
import AppTableHeader from "@/components/AppTableHeader";

let openModal = ref(false)
defineEmits(['addToOrder'])
defineProps({
    details:{
        type: Array,
        required: true
    },
    inOrder: {
        type: Boolean,
        required: false
    }
})
</script>

