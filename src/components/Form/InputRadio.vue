<script setup>
import {onMounted, ref} from 'vue';

defineProps(['modelValue']);

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});
</script>

<template>
    <input class="cursor-pointer focus:ring-primary-focus h-4 w-4 text-primary border-gray-300 disabled:cursor-not-allowed" type="radio"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)" ref="input">
</template>
