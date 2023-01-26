<template>
  <div class="flex divide-x justify-center">
    <div v-for="(item,index) in tabs" :key="index">

      <div v-if="!item.disabled" class="px-6 py-2 capitalize cursor-pointer hover:bg-gray-100"
           :class="item.key == activeTab?'bg-gray-100':'bg-gray-50'"
           @click="changeTab(item)">
        <slot :name="`btn${item.key}`">
          {{ item.name }}
        </slot>
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
