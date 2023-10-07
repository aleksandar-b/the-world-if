<template>
  <div class="bg-[#EFF1F1] sticky top-0 px-[140px] overflow-auto" style="height: calc(100vh - 40px)">
    <div class="flex mt-4 overflow-auto scrollbar-hide border border-b mb-0.5">
      <div v-for="(item) in store.categories" :key="item.id"
           @click="setCategory(item.name)"
           :class="(item.name == store.active_category) ? 'bg-gray-800 hover:bg-gray-800-hover active:bg-gray-400-active ' +
            'text-white': 'bg-white text-gray-600 hover:bg-gray-800-hover hover:bg-gray-100'"
           class="inline-flex cursor-pointer items-center justify-center px-3 py-1 space-x-2 text-sm">
        {{ item.name }}
      </div>
    </div>
    <div class=" items-center justify-center overflow-hidden py-32" v-if="loading">
      <div class="flex justify-center">
        <Spinner class="animate-spin"/>
      </div>
      <div class="text-center mt-2">
        Please wait, while we are fetching AI generated headlines...
      </div>
    </div>
    <Grid :options="options" v-else/>
  </div>
</template>
<script setup>

import {useSearchStore} from "@/Store/SearchOptions";
import Spinner from "@/components/Spinner.vue";
import {onMounted, ref} from "vue";
import Grid from "@/views/Page/News/Grid.vue";
import {useRoute} from "vue-router";
import {newsAiResponse} from "@/services/news-ai";

const loading = ref(false);
const options = ref();
const store = useSearchStore();
const {id} = useRoute().params;

onMounted(() => {
  setCategory(store.active_category);
})

const setCategory = (item) => {
  loading.value = true;
  store.$patch({
    active_category: item,
  });

  const prompt = `I need total 3 news topics on "${store.getEventById(id)?.name ?? ''}" impact on "${item}" with headline and paragraph with JSON like [{"title":"","description":""}. Description should be max 316 characters.`;
  newsAiResponse(prompt).then((resp) => {
    options.value = resp;
    loading.value = false;
  }).catch((resp) => {
    console.error(resp);
  })
}
</script>
