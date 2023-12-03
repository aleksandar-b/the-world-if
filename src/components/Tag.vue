<template>
  <div
    class="flex items-center p-1 space-x-2 text-sm font-medium rounded-md"
    :class="{
      'bg-green-100 text-green-500': !type || type === '',
      'bg-gray-100 text-gray-500': type === 'gray',
    }"
  >
    <slot name="icon"></slot>
    <span> {{ text }} </span>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  text: String,
  type: String,
});
</script>
