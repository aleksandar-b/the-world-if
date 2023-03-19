<script setup>
defineProps({
  type: {
    type: String,
    default: 'submit',
  }, disabled: {
    type: Boolean,
    default: false,
  },
  href: String,
  target: String,
  method: {
    type: String,
    default: 'get',
  },
});

</script>

<template>

  <!--    <Link v-if="href&&!target" as="link" :method="method" :href="href"-->
  <!--          class="inline-flex capitalize cursor-pointer items-center justify-center px-6 py-2.5 space-x-2 bg-primary-->
  <!--            border border-transparent rounded font-semibold-->
  <!--            text-sm text-white  hover:bg-primary-hover-->
  <!--            active:bg-primary-active transition ease-in-out duration-150  whitespace-nowrap">-->
  <!--        <slot/>-->
  <!--    </Link>-->
  <a v-if="target" :target="target" :href="href"
     class="inline-flex capitalize cursor-pointer items-center justify-center px-6 py-2.5 space-x-2
            border border-transparent rounded font-semibold
            text-sm text-white  bg-primary
            transition ease-in-out duration-150  whitespace-nowrap">
    <slot/>
  </a>
  <button
      :class="{'bg-primary-disabled cursor-not-allowed':disabled,'bg-primary hover:bg-primary-hover':!disabled}"
      :disabled="disabled"
      v-else
      :type="type"
      class="inline-flex items-center justify-center px-6 py-2.5 space-x-2
            border border-transparent rounded font-semibold
            text-sm text-white
             transition ease-in-out duration-150 whitespace-nowrap">
    <slot/>
  </button>
</template>
