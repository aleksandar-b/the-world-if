<template>
  <marquee behavior="alternate" scrollamount="3" bgcolor="white">
  <div class="stock-ticker flex gap-x-10 p-1 bg-white">
    <div v-for="(ticker) in tickerStore.tickers" class="flex text-sm" :key="ticker.name">
      <span class="text-gray-900 pr-2 font-medium whitespace-nowrap">{{ ticker.name }}</span>
      <span class="text-gray-900 font-light mr-1.5">{{ ticker.price }}</span>
      <span class="text-green-600 mr-1">&#9650;</span>
      <span class="text-green-600">{{ ticker.percent }}</span>
    </div>
  </div>
  </marquee>
  <div class="w-full border-gray-400  border-b-2 py-4 mt-6 font-serif">
    <p class="font-bold text-6xl text-center capitalize">
      {{ store.getEventById(id)?.name }}
    </p>
  </div>
  <div class="relative flex  flex-col justify-center py-6 sm:py-12 mb-10 font-serif">
    <div class="columns-1 md:columns-2 lg:columns-3  2xl:columns-4 [column-fill:_balance] mx-auto divide-x
      divide-gray-400 before:box-inherit after:box-inherit">
      <div v-for="(item,index) in results" :key="index" class="break-inside-avoid px-6"
           :class="(index==0)&&'border-l border-l-gray-400'">
        <p class="font-bold text-2xl mb-4">{{ item.title }}</p>
        <div class="flex text-sm py-2">
          <span class="text-gray-900 pr-2 font-medium whitespace-nowrap">S&P 500</span>
          <span class="text-gray-900 font-light mr-1.5">3,972.61</span>
          <span class="text-green-600 mr-1">&#9650;</span>
          <span class="text-green-600">+1.89%</span>
        </div>
        <p class="text-md tracking-2xl leading-6 font-raleway">{{ item.description }}</p>
        <div class="py-4">
          <hr class="border-gray-400">
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import "@/assets/newspaper.css";
import {useSearchStore, useTickerStore} from "@/Store/SearchOptions";
import {useRoute} from "vue-router";

const props = defineProps({
  options: {
    type: Object,
    default: []
  }
})
const {id} = useRoute().params;
const store = useSearchStore();
const tickerStore = useTickerStore()
const results = computed(() => {
  let text = props.options?.data?.choices[0].text.trim() ?? '[]';
  text = text.replace(']\n', '').trim()
  return JSON.parse(text);
})
</script>
