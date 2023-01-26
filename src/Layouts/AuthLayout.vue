<template>
  <div>
    <div class="">
      <div class="custom-container py-2 flex justify-between">
        <div class="text-center text-xl text-gray-700 font-semibold flex items-center">
          <a href="/">
            <img class="float-left -ml-8" src="../assets/logo.svg" width="240" height="64">
          </a>
        </div>

        <div>
          <form
              action="https://formspree.io/f/mknagend"
              method="POST"
          >
            <input class="border border-gray-200 px-2 py-0.5 rounded text-gray-600" placeholder="Your email" type="email" name="email">
            <!-- your other form fields go here -->
            <button class="border p-0.5 px-2 text-gray-900 ml-1 rounded hover:bg-gray-900 hover:text-white" type="submit">Subscribe</button>
          </form>

        </div>
      </div>
    </div>
    <div :class="classes">
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
