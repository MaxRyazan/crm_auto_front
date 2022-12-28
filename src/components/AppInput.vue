<template>
    <input class="input" @keydown.enter="$emit('action')">
</template>

<script setup>
    import { defineEmits } from 'vue'
    defineEmits(['action'])

</script>
