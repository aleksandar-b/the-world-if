<template>
  <div class="bg-slate-50">

    <div>
      <!--      main node add button-->
      <MainNodeView :option="item"/>

      <!--      sub nodes-->
      <Layer v-if="store.getNodeById(id).length" class="mx-auto" :level="store.level" :showTree="true"
           :options="store.getNodeById(id)"/>
      <!--      sub nodes end-->

    </div>

  </div>
</template>

<script setup>
import {useRoute} from "vue-router/dist/vue-router.mjs";
import {useSearchStore} from "@/Store/SearchOptions";
import Layer from "@/views/Page/Graph/Layer.vue";
import MainNodeView from "@/views/Page/Graph/MainNodeView.vue";
import {computed} from "vue";

const store = useSearchStore();
const {id} = useRoute().params;
const item = computed(() => {
  return store.getSearchResultById(id);
})
</script>

