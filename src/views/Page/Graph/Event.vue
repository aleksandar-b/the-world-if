<template>
  <div
       class="relative border bg-slate-50 cursor-pointer rounded-2xl shadow-sm hover:drop-shadow-lg flex flex-col group"
       style="width: 162px; height:158px; z-index: 3;"
       :class="(index === viewIndex) && 'ring-2 ring-gray-500 ring-inset'">
<!--    <div class="absolute top-10 font-medium px-2 py-6 -z-10 w-full bg-gray-200 text-orange-600 border-2 border-gray-500">-->
<!--      <p class="text-xs uppercase"></p>-->
<!--    </div>-->
    <div @click="getSubOptions(option,index)" class="p-3 flex flex-col justify-between flex-grow">
      <div>
        <div class="inline-block font-medium px-2 py-0.5 rounded bg-orange-100 text-orange-600">
          <p class="text-xs uppercase">{{ option.category }}</p>
        </div>
        <div class="font-semibold py-1 mt-1 text-gray-700 text-sm tracking-[0.01785em] line-clamp-2" :title="option.name"
             v-tooltip="option.name">
          {{ option.name }}
        </div>
      </div>
      <div>
        <div class="flex py-1 font-medium text-sm text-gray-500" :title="option.predictor">
          <img :src="option.predictorImg" alt="" class="h-6 w-6 flex-none rounded-full mr-2" />
          <p>{{ option.predictor }}</p>
        </div>

        <div class="flex justify-between">
          <div
              class="inline-flex items-center text-start rounded px-2 py-0.5 bg-tint text-green-800 font-semibold text-sm"
              v-tooltip="'Possible return on actionable items'">
                    <span>
                      <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" class="fill-green-800"><path
                          d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>
                    </span>
            {{ option.return || '15' }}%
          </div>

          <div
              class="inline-flex items-center text-start rounded px-1 py-0.5 bg-gray-100 text-gray-600 font-semibold text-sm"
              v-tooltip="'Probability'">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
              <path class="text-gray-600"
                    d="M7.042 13.688q.312 0 .52-.209.209-.208.209-.521 0-.312-.209-.52-.208-.209-.52-.209-.292 0-.511.209-.219.208-.219.52 0 .292.209.511.208.219.521.219Zm0-5.917q.312 0 .52-.208.209-.209.209-.521 0-.292-.209-.511-.208-.219-.52-.219-.292 0-.511.209-.219.208-.219.521 0 .312.209.521.208.208.521.208ZM10 10.729q.312 0 .521-.208.208-.209.208-.521 0-.312-.208-.521-.209-.208-.521-.208-.312 0-.521.208-.208.209-.208.521 0 .312.208.521.209.208.521.208Zm2.958 2.959q.292 0 .511-.209.219-.208.219-.521 0-.312-.209-.52-.208-.209-.521-.209-.312 0-.52.209-.209.208-.209.52 0 .292.209.511.208.219.52.219Zm0-5.917q.292 0 .511-.208.219-.209.219-.521 0-.292-.209-.511-.208-.219-.521-.219-.312 0-.52.209-.209.208-.209.521 0 .312.209.521.208.208.52.208Zm-7.896 8.271q-.479 0-.791-.313-.313-.312-.313-.791V5.062q0-.479.313-.791.312-.313.791-.313h9.876q.479 0 .791.313.313.312.313.791v9.876q0 .479-.313.791-.312.313-.791.313Zm0-.584h9.876q.187 0 .354-.166.166-.167.166-.354V5.062q0-.187-.166-.354-.167-.166-.354-.166H5.062q-.187 0-.354.166-.166.167-.166.354v9.876q0 .187.166.354.167.166.354.166Zm-.52-10.916v10.916V4.542Z"/>
            </svg>
            {{ option.probability }}%
          </div>
        </div>
      </div>
    </div>

    <div class="flex absolute inset-x-0 -bottom-5 justify-center space-x-4">
      <Button @click="openBox(option)" class="rounded-full px-2.5 shadow bg-gray-700 hidden group-hover:block">
        <PlusSmallIcon class="h-6 w-6"/>
      </Button>
    </div>

  </div>
</template>
<script setup>

import Button from "@/components/Form/Button.vue";
import {PlusSmallIcon} from "@heroicons/vue/24/outline";
import {EyeIcon} from "@heroicons/vue/24/outline";

defineProps({
  option: {
    type: Object,
    default: {}
  },
  index: {
    type: [Number],
    default: 0
  },
  viewIndex: { type: Number, default: 0 },
  getSubOptions: { type: Function, default: () => {} },
  openBox: { type: Function, default: () => {} }
})
</script>