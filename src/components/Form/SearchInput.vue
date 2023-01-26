<template>
  <Combobox @update:modelValue="onSelect">
    <div class="relative mt-12">
      <MagnifyingGlassIcon class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                           aria-hidden="true"/>
      <div class="relative ">
        <input class="h-12  w-full rounded-md
           bg-transparent pl-11 pr-4 text-gray-800
           placeholder-gray-400
           border
           focus-visible:shadow
           focus-visible:outline-0
           focus:ring-0 sm:text-sm"
               :class="(query!='')&&'rounded-t-sm rounded-b-none focus-visible:shadow-none'"
               v-model="searchQuery"
               @keyup="searchData($event.target.value)"/>
      </div>
      <div class="pointer-events-none absolute top-2.5 right-8 h-7 w-5 text-gray-400 border-l border-gray-200 pl-3">
          <svg class="mt-0.5" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#3b82f6"><g><rect fill="none" height="24" width="24"/></g><g><path d="m21.41 10.59-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83zM13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z"/></g></svg>
      </div>
      <ComboboxOptions v-if="query !== '' && filteredProjects.length > 0" static
                       class=" scroll-py-2 divide-y divide-gray-100 absolute  z-10 inset-x-0 mt-4 w-full">
        <li class="w-full">
          <ul
              class="text-sm z-50 max-h-80  overflow-y-auto  text-gray-700 bg-white border rounded-t-none  border-t-1 rounded-xl -translate-y-5">
            <ComboboxOption v-if="filteredProjects.length" v-for="item in  filteredProjects" :key="item.id"
                            :value="item" as="template" v-slot="{ active }">

              <li @click="onSelect(item)" :class="['flex cursor-default select-none items-center px-3 py-2',
            active && 'bg-primary text-white']">

                <Component v-if="item.icon"
                           :is="item.icon"
                           :class="['h-6 w-6 flex-none', active ? 'text-white' : 'text-gray-400']"
                           aria-hidden="true"/>
                <FolderIcon v-else class="mx-auto h-6 w-6 text-gray-400" aria-hidden="true"/>
                <span class="ml-3 flex-auto truncate">{{ item.name }}</span>
                <span v-if="active" class="ml-3 flex-none text-indigo-100">Jump to...</span>
              </li>

            </ComboboxOption>
            <div v-if="query !== '' && filteredProjects.length === 0" class="py-14 px-6 text-center sm:px-14">
              <FolderIcon class="mx-auto h-6 w-6 text-gray-400" aria-hidden="true"/>
              <p class="mt-4 text-sm text-gray-500">We couldn't find any consequences with that query. Please try
                again.</p>
            </div>

          </ul>
        </li>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>

<script setup>
import {computed, ref} from 'vue'
import {MagnifyingGlassIcon} from '@heroicons/vue/20/solid'
import {Combobox, ComboboxOption, ComboboxOptions,} from '@headlessui/vue'
import {useSearchStore} from "@/Store/SearchOptions";
import {useRoute} from "vue-router";
import {searchOptions} from "../../utils/Constant.js";
import {FolderIcon} from '@heroicons/vue/24/outline'

const {getEventById} = useSearchStore();

const {id} = useRoute().params;
const value = getEventById(id)?.name;
const store = useSearchStore();
const query = ref('');
const searchQuery = ref(getEventById(id)?.name);
const filteredProjects = computed(() =>
    query.value === ''
        ? []
        : searchOptions.filter((project) => {
          return project.name.toLowerCase().includes(query.value.toLowerCase())
        })
)


function onSelect(item) {
  store.$patch({
    level: 1,
  })
  window.location = '/' + item.id + '/graph';
}

const searchData = (value) => {
  query.value = value;
  console.log(value);
}
const emit = defineEmits(['openOption'])


</script>
