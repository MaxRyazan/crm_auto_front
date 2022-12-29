<template>
    <input class="input"
           :value="modelValue"
           @keydown.enter="$emit('action')"
           @input="$emit('update:modelValue', $event.target.value)"
    >
</template>

<script setup>
    import { defineEmits, defineProps } from 'vue'
    defineEmits(['update:modelValue', 'action'])
    defineProps(['modelValue'])
</script>
