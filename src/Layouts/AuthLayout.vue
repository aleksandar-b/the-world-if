<template>
  <div style="background-image: url(/dot.png);">
    <div class="bg-white border-b border-gray-200">
      <div class="custom-container py-2 flex justify-between">
        <div class="flex items-center">
          <div class="text-center text-xl text-gray-700 font-semibold flex items-center">
            <a href="/">
              <img class="float-left -ml-8" src="../assets/logo.svg" width="240" height="64">
            </a>
          </div>
          <div>
            <a href="/for-business" class="ml-8 text-gray-700 hover:text-gray-900 mr-4">For Business</a>
          </div>
          <div>
            <a href="/trending" class="ml-8 text-gray-700 hover:text-gray-900 mr-4">Trending</a>
          </div>
          <div>
            <a href="/news" class="ml-8 text-gray-700 hover:text-gray-900 mr-4">News</a>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <a href="/login" class="text-gray-700 hover:text-gray-900 mr-4">Login</a>
          <a href="/register" class="text-gray-700 hover:text-gray-900">Register</a>
        </div>

      </div>
    </div>
    <div :class="classes" class="bg-world-dot">
      <slot/>
    </div>
  </div>
</template>
<script setup>
import Button from "@/components/Form/Button.vue";

defineProps({
  classes: {
    type: String,
    default: 'custom-container'
  }
})
</script>
