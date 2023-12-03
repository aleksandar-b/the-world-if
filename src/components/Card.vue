<template>
  <div
    class="flex flex-col overflow-hidden bg-white border border-gray-400 rounded-md"
  >
    <div class="flex">
      <div class="flex flex-col items-start flex-1">
        <div class="rounded-br-md bg-gray-100 px-2.5 py-0.5">
          <span class="text-sm font-medium text-gray-500">{{ tag }}</span>
        </div>
        <div class="px-4 py-2">
          <slot name="left-content"></slot>
        </div>
      </div>
      <div class="flex flex-col justify-center mr-4">
        <slot name="right-content"></slot>
      </div>
    </div>

    <div>
      <slot name="bottom-content"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tag: String,
  username: String,
  image: String,
});
</script>
