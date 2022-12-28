<template>
    <button class="btn" @click="$emit('action')">
        <slot />
    </button>
</template>

<script setup>
import { defineEmits } from 'vue'
defineEmits(['action'])
</script>
