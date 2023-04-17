<template>
  <div class="relative">
    <div class="flex justify-center items-end my-10">
      <img class="float-left z-10 mt-5 -ml-8" src="../../assets/logo-dark.svg" width="240" height="64">
      <img class="absolute -top-10 float-left" src="../../assets/world.png" width="170" height="24">
    </div>
    <Combobox @update:modelValue="onSelect">
      <div class="relative">
          <MagnifyingGlassIcon v-if="query === ''" class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" aria-hidden="true" />
          <ArrowRightIcon v-if="query !== ''" class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-[#61a9aa]" aria-hidden="true" />
          <ComboboxInput :class="(query!=='') && 'rounded-b-none focus-visible:shadow-none'" class="h-12 w-full border-2 border-slate-500 rounded-md bg-white pl-11 pr-4 text-gray-800 placeholder-gray-400 focus-visible:shadow focus-visible:outline-0 focus:ring-0 sm:text-sm" placeholder="Russia attacks Ukraine..." @change="query = $event.target.value" />
        </div>
        <ComboboxOptions v-if="query !== '' && filteredEvents.length > 0" static
                         class="absolute scroll-py-2 divide-y divide-gray-100 z-10 inset-x-0 mt-4 w-full">
          <li class="w-full">
            <ul
                class="z-50 max-h-80 overflow-y-auto text-gray-700 bg-white border rounded-t-none border-t-1 rounded-xl -translate-y-5 border-2 border-slate-500">
              <ComboboxOption v-for="item in filteredEvents" :key="item.id"
                              :value="item" as="template" v-slot="{ active }">

                <li @click="onSelect(item)" :class="['flex text-gray-600 text-base py-3  cursor-pointer select-none items-center px-3 py-2',
              active && 'bg-[#eff9fb] text-[#61a9aa]']">
                  <svg  width="1em" height="1em" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" style="fill: currentcolor; width: 24px; height: 24px; font-size: 24px; line-height: 24px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 18C2 9.163 9.163 2 18 2h28c8.837 0 16 7.163 16 16v28c0 8.837-7.163 16-16 16H18C9.163 62 2 54.837 2 46V18Zm22 4.532v18.936c0 1.554 1.696 2.514 3.029 1.715l16.113-9.468c1.294-.777 1.294-2.653 0-3.43l-16.113-9.468c-1.333-.8-3.029.16-3.029 1.715Z" fill="url(#playbook_v2_react_svg__a)"></path><defs><radialGradient id="playbook_v2_react_svg__a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(45 -1.371 3.31) scale(85.0242)"><stop stop-color="#8C80D6"></stop><stop offset="1" stop-color="#6F60CC"></stop></radialGradient></defs></svg>
<!--                  <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="MuiSvgIcon-root bardeen-icon jss41" focusable="false" aria-hidden="true" data-testid="bi-icon-with-size" style="fill: currentcolor; width: 24px; height: 24px; font-size: 24px; line-height: 24px;"><path d="M2 18C2 9.163 9.163 2 18 2h28c8.837 0 16 7.163 16 16v28c0 8.837-7.163 16-16 16H18C9.163 62 2 54.837 2 46V18Z" fill="url(#trigger_react_svg__a)"></path><path opacity="0.24" d="M18 2C9.163 2 2 9.163 2 18v2C2 11.163 9.163 4 18 4h28c8.837 0 16 7.163 16 16v-2c0-8.837-7.163-16-16-16H18Z" fill="url(#trigger_react_svg__b)"></path><path opacity="0.24" d="M46 62c8.837 0 16-7.163 16-16v-2c0 8.837-7.163 16-16 16H18C9.163 60 2 52.837 2 44v2c0 8.837 7.163 16 16 16h28Z" fill="url(#trigger_react_svg__c)"></path><g clip-path="url(#trigger_react_svg__d)"><path d="M34.474 16.317c.49-.684 1.558-.165 1.327.644l-2.698 11.177a.25.25 0 0 0 .269.317l11.791-1.26a.75.75 0 0 1 .695 1.183L29.526 47.683c-.49.684-1.558.165-1.327-.644l2.698-11.177a.25.25 0 0 0-.269-.317l-11.791 1.26a.75.75 0 0 1-.695-1.182l16.332-19.306Z" fill="url(#trigger_react_svg__e)"></path></g><defs><radialGradient id="trigger_react_svg__a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(53.514 6.83 18.478) scale(74.6267)"><stop stop-color="#53B3F7"></stop><stop offset="0" stop-color="#54575C"></stop><stop offset="1" stop-color="#3B3C41"></stop></radialGradient><radialGradient id="trigger_react_svg__e" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 16 -14 0 32 32)"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#DDE4F8"></stop></radialGradient><linearGradient id="trigger_react_svg__b" x1="32" y1="2" x2="32" y2="20" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="trigger_react_svg__c" x1="32" y1="62" x2="32" y2="44" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><clipPath id="trigger_react_svg__d"><path fill="#fff" transform="translate(16 16)" d="M0 0h32v32H0z"></path></clipPath></defs></svg>-->
                  <div class="flex-auto">
                    <span class="ml-3 flex-auto truncate text-sm font-medium">{{ item.name }}</span>
  <!--                  <p class="ml-3 flex-none text-sm text-gray-400">{{ item.category }}</p>-->
                  </div>

                </li>

              </ComboboxOption>

            </ul>
          </li>
        </ComboboxOptions>
      <div v-if="query !== '' && !filteredEvents.length" class="bg-white border rounded-t-none border-t-1 rounded-xl -translate-y-1 border-2 border-slate-500 py-6 px-6 text-center sm:px-14">
        <div class="text-center">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          <h3 class="mt-2 text-sm font-semibold text-gray-900">No Events</h3>
          <p class="mt-1 text-sm text-gray-500">Get started by creating a new Event.</p>
          <div class="mt-6">
            <button type="button" @click="openDialog=true" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <PlusIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              Add Event
            </button>
          </div>
        </div>
      </div>
    </Combobox>
  </div>
  <ConsequenceForm @getData="() => ({})" :option="{name: query, category:'economy' }" v-model="openDialog"/>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue'
import {MagnifyingGlassIcon, ArrowRightIcon} from '@heroicons/vue/20/solid'
import {Combobox, ComboboxOption, ComboboxOptions, Dialog, ComboboxInput} from '@headlessui/vue'
import {useSearchStore} from "@/Store/SearchOptions";
import ConsequenceForm from "@/components/ConsequenceForm.vue";
import {useRoute} from "vue-router";
import {searchOptions} from "../../utils/Constant.js";
import {PlusIcon} from '@heroicons/vue/24/outline'

const {getEventById} = useSearchStore();

const {id} = useRoute().params;
const value = getEventById(id)?.name;
const store = useSearchStore();
const query = ref('');
const openDialog = ref(false);
const filteredEvents = computed(() =>
    query.value === ''
        ? searchOptions.filter((project) => {
          return project.name.toLowerCase().includes('Russia attacks Ukraine'.toLowerCase())
        })
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

const emit = defineEmits(['openOption'])


</script>
