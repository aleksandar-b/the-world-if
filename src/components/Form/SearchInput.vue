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
  <!--      <div class="pointer-events-none absolute top-2.5 right-8 h-7 w-5 text-gray-400 border-l border-gray-200 pl-3" aria-hidden="true">-->
  <!--          <svg aria-hidden="true" class="mt-0.5 fill-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><path d="m21.41 10.59-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83zM13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z"/></g></svg>-->
  <!--&lt;!&ndash;        <svg class="mt-0.5 fill-gray-400 rotate-180"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M440 976V776q0-56-17-83t-45-53l57-57q12 11 23 23.5t22 26.5q14-19 28.5-33.5T538 571q38-35 69-81t33-161l-63 63-57-56 160-160 160 160-56 56-64-63q-2 143-44 203.5T592 631q-32 29-52 56.5T520 776v200h-80ZM248 423q-4-20-5.5-44t-2.5-50l-64 63-56-56 160-160 160 160-57 56-63-62q0 21 2 39.5t4 34.5l-78 19Zm86 176q-20-21-38.5-49T263 481l77-19q10 27 23 46t28 34l-57 57Z"/></svg>&ndash;&gt;-->
  <!--      </div>-->
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
              <div v-if="query !== '' && filteredEvents.length === 0" class="py-14 px-6 text-center sm:px-14">
                <FolderIcon class="mx-auto h-6 w-6 text-gray-400" aria-hidden="true"/>
                <p class="mt-4 text-sm text-gray-500">We couldn't find any consequences with that query. Please try
                  again.</p>
              </div>

            </ul>
          </li>
        </ComboboxOptions>
    </Combobox>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue'
import {MagnifyingGlassIcon, ArrowRightIcon} from '@heroicons/vue/20/solid'
import {Combobox, ComboboxOption, ComboboxOptions, Dialog, ComboboxInput} from '@headlessui/vue'
import {useSearchStore} from "@/Store/SearchOptions";
import {useRoute} from "vue-router";
import {searchOptions} from "../../utils/Constant.js";
import {FolderIcon} from '@heroicons/vue/24/outline'
import {onActivated} from "@vue/runtime-core";

const {getEventById} = useSearchStore();

const {id} = useRoute().params;
const value = getEventById(id)?.name;
const store = useSearchStore();
const query = ref('');
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
