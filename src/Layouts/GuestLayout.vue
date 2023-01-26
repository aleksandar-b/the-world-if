<template>
  <div>
    <div class="">
      <div class="custom-container py-2 flex justify-end">
        <Button>
          Sign in
        </Button>
      </div>
    </div>
    <div class="custom-container">
      <slot/>
    </div>
  </div>
</template>
<script setup>

import Button from "@/components/Form/Button.vue";
</script>
