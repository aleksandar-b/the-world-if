<template>
  <div style="background-image: url(/public/dot.png);">
    <div class="bg-white border-b border-gray-200">
      <div class="custom-container py-2 flex justify-between">
        <div class="text-center text-xl text-gray-700 font-semibold flex items-center">
          <a href="/">
            <img class="float-left -ml-8" src="../assets/logo.svg" width="240" height="64">
          </a>
        </div>

        <div class="flex justify-center items-center">
          <form class="m-1 sm:flex sm:max-w-md" action="https://formspree.io/f/mknagend" method="POST">
            <label for="email-address" class="sr-only">Email address</label>
            <input type="email" name="email-address" id="email-address" autocomplete="email" required="" class="w-full min-w-0 rounded-md border-2 border-gray-500 bg-white px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500" placeholder="Enter your email" />
            <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button type="submit" class="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-100 py-2 px-4 text-base font-medium text-red-600 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Subscribe</button>
            </div>
          </form>
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
