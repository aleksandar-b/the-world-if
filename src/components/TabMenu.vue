<template>
  <div class="flex divide-x justify-center my-4">
    <div class="flex items-center justify-center">
      <div class="inline-flex" role="group">
        <div v-for="(item,index) in tabs" :key="index">
          <button
              v-if="!item.disabled"
              type="button"
              @click="changeTab(item)"
              :class="{ 'bg-gray-300': item.key == activeTab, 'bg-gray-50': item.key != activeTab, 'border-l-0': index === 1, 'rounded-l': index === 0, 'rounded-r': index === 1 }"
              class="px-6 py-2 border-2 border-gray-500 text-gray-600 font-medium text-xs leading-tight uppercase focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <slot :name="`btn${item.key}`">
              {{ item.name }}
            </slot>
          </button>

        </div>
      </div>
    </div>
  </div>
  <div v-for="(item,index) in tabs" :key="index"
       :class="(item.key==activeTab)?'':'hidden'">
    <slot v-if="!item.disabled" :name="item.key"/>
  </div>
</template>
<script setup>
import {ref} from "vue";
import router from "@/router";

const props = defineProps({
  tabs: {
    type: Object,
    default: []
  },
  active: [String, Number],
  url: String,
})
const activeTab = ref(props.active);
const emit = defineEmits(['setActive']);
const changeTab = (item) => {
  if (activeTab.value != item.key) {
    if (props.url) {
      router.push(props.url + '/' + item.key);
    }
    activeTab.value = item.key
    emit('setActive', item.key);
  }
}
</script>
