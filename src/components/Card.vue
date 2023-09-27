<template>
  <div
    class="flex flex-col max-w-md overflow-hidden rounded-md bg-white border border-gray-400"
  >
    <div class="flex">
      <div class="flex flex-1 flex-col items-start">
        <div class="rounded-br-md bg-gray-200 px-2.5 py-0.5">
          <span class="text-sm font-medium text-gray-400">{{ tag }}</span>
        </div>
        <div class="px-4 py-2">
          <slot name="left-content"></slot>
        </div>
      </div>
      <div class="mr-4 flex flex-col justify-center">
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
