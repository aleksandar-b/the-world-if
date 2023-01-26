<template>
    <input type="file"
           :id="id"
           @change="selectFile"
           class="block w-full bg-white border border-gray-300 shadow-sm rounded-md text-slate-500 file:mr-4 file:py-2
                file:px-4 file:border-0 file:bg-stroke file:text-primary-light file:cursor-pointer disabled:cursor-not-allowed"/>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        default: ''
    },
    id: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [Object, String]
    }
})

const emit = defineEmits(['changeValue', 'cover']);

function selectFile(event) {
    emit('changeValue', event.target.files[0]);
    emit('cover', URL.createObjectURL(event.target.files[0]));
}
</script>
