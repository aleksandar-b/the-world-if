<script setup>
defineProps(['value', 'required']);
</script>

<template>
    <label class="block font-medium text-sm text-gray-500 whitespace-nowrap capitalize">
        <span v-if="value">{{ value }} <strong v-if="required" class="text-red-500">*</strong></span>
        <span v-else><slot /></span>
    </label>
</template>
