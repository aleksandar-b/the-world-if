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
    <textarea
        class="w-full border border-gray-300 disabled:bg-gray-50 disabled:cursor-not-allowed focus:border-indigo-300
           focus:ring focus:ring-indigo-200
           focus-visible:outline-0
           focus-visible:ring-0
focus:ring-opacity-50 rounded px-4 py-2"
        :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="input"></textarea>
</template>
