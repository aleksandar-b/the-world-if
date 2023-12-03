<template>
  <AuthLayout classes="">
    <!--search input box section-->
    <section class="justify-center min-h-[220px]">
      <div class="max-w-2xl  mx-auto">
        <SearchInput />
      </div>
    </section>

    <!-- tab section-->
    <main>
      <TabMenu @setActive="active_tab=$event" :tabs="tabs" :active="activeTab" :url="`/${id}`">
        <template #graph>
          <div class="grid bg-slate-50 overflow-auto">
            <Graph/>
          </div>
        </template>
        <template #news>
          <News/>
        </template>
      </TabMenu>
    </main>
  </AuthLayout>
</template>
<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import {computed, onMounted, ref} from "vue";
import SearchInput from "@/components/Form/SearchInput.vue";
import GraphCard from "@/components/GraphCard.vue";
import TabMenu from "@/components/TabMenu.vue";
import News from "@/views/Page/News/Index.vue";
import Graph from "@/views/Page/Graph/Index.vue";
import {useRoute} from "vue-router";
import {useSearchStore} from "@/Store/SearchOptions";

const store = useSearchStore();
const {id, type} = useRoute().params;
const active_tab = ref(type);
//tab options
const tabs = [
  {key: 'graph', name: 'Graph'},
  {key: 'news', name: 'News'}
];
// set default active tab or update tab
const activeTab = computed(() => {
  if (type) {
    return type;
  } else {
    return 'graph';
  }
})

onMounted(() => {
  // window load to set consequence level as 1
  store.$patch({
    level: 1,
  });
})


</script>
