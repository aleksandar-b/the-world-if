<template>
  <div
    class="flex items-center space-x-2 rounded-md p-2 text-sm font-medium"
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
