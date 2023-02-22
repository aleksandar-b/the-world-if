<template>

  <div class="bg-slate-50 bg-repeat">

    <ConsequenceForm @getData="getData" v-model="openDialog" :option="option" />

    <!--    card design-->
    <div style="width:1200px;" class="relative mx-auto snap-mandatory snap-x">
      <!-- layer name -->
      <span class="absolute left-0 -top-0 text-gray-500">
        <div class="inline-block font-medium px-2 py-0.5 rounded-tl bg-gray-100 text-gray-600">
          <button class="text-xs uppercase">{{ converter.toOrdinal(currentLevel) }} order consequence</button>
        </div>
      </span>
      <span class="absolute right-0 -top-0 text-gray-500">
        <div class="inline-block font-medium px-2 py-0.5 rounded-t bg-green-100 text-green-600">
          <button class="text-xs uppercase" v-tooltip="'Possible cumulative return from all events'">+ 856.12%</button>
        </div>
      </span>
      <div :id="`mainDiv${currentLevel}`"
           class="flex space-x-10 overflow-x-scroll overflow-y-hidden pb-10 px-10 z-20 mx-auto pt-10 rounded-md scrollbar-hide bg-repeat shadow-sm shadow-slate-200 border border-slate-200" style="background-image: url(/public/dot.png)">

        <!--        empty card for set center node card-->
        <div :id="`mainsub${currentLevel}first`" @click="scrollDiv(`mainsub${currentLevel}first`)" class="li"></div>

        <!-- card design -->
        <div class="li" v-for="(option,index) in options" :id="`mainsub${currentLevel}${index}`" @click="scrollDiv(`mainsub${currentLevel}${index}`)">
          <Event :index="index" :option="option" :view-index="viewIndex" :get-sub-options="getSubOptions" :open-box="openBox" />
        </div>
        <!--        empty card for set center node card-->
        <div :id="`mainsub${currentLevel}last`" @click="scrollDiv(`mainsub${currentLevel}last`)" class="li"></div>

      </div>
    </div>
    <!--    card design end-->

    <!--    card line design-->
    <div v-if="length && showCenter" class="px-1 flex justify-center absolute left-[46%]">
      <div class="flex rotate-90 mt-[24px]">
        <svg viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[12px] h-[24px]">
          <circle cx="6" cy="12" r="7" fill="#fff"></circle>
          <circle cx="6" cy="12" r="4" fill="#1f2937"></circle>
          <path fill="#1f2937" d="M9 11h3v2H9z"></path>
        </svg>
        <svg class=" w-[64px] h-[24px]" preserveAspectRatio="none" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path fill="url(#default-mid_react_svg__a)" d="M0 11h64v2H0z"></path>
          <defs>
            <linearGradient id="default-mid_react_svg__a" x1="0" y1="12" x2="64" y2="12" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1f2937"></stop>
              <stop offset="1" stop-color="#374151"></stop>
            </linearGradient>
          </defs>
          <defs>
            <filter x="0" y="0" width="1" height="1" id="solid">
              <feFlood flood-color="rgb(248 250 252)"/>
              <feComposite in="SourceGraphic" operator="xor"/>
            </filter>
          </defs>
          <text class="fill-slate-800" filter="url(#solid)" text-anchor="middle" pointer-events="none" font-size="10px" x="30" y="15">CAUSES</text>
          <text class="fill-slate-800" text-anchor="middle" pointer-events="none" font-size="10px" x="30" y="15">CAUSES</text>
        </svg>
        <svg width="1em" height="1em" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[12px] h-[24px]">
          <path d="M2 7.957c0-.743.75-1.201 1.338-.82l6.233 4.044c.572.371.572 1.267 0 1.638l-6.233 4.043C2.749 17.244 2 16.786 2 16.044V7.957ZM0 11h2v2H0z" fill="#374151"></path>
        </svg>
      </div>
    </div>
    <!--    card line design end-->

    <!--    sub card render-->
    <div class="w-full pt-20 relative" v-if=" length">

      <!--    backdrop layer-->
      <div v-if="showMore"
           class="w-full absolute inset-0 z-10 backdrop-blur-sm  bg-gradient-to-t from-white  flex justify-center">
        <button @click="setLevel()" type="button"
                class="relative mt-56 bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2
                 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold
                 h-12 px-6 rounded-lg flex items-center dark:bg-slate-700
                 dark:hover:bg-slate-600 pointer-events-auto">
          {{ converter.toOrdinal(currentLevel + 1) }} Order Consequences
        </button>
      </div>
      <!--    backdrop layer end-->

      <!--    sub card render sub card self-->
      <div class="">
        <Box :showTree="showTreeUpdate" :level="level+1" class="mx-auto" :options="subOptions"/>
      </div>
      <!--    sub card render sub card self-->
    </div>
    <!--    sub card render end-->

  </div>
</template>
<script setup>
import converter from "number-to-words";
import Box from "@/views/Page/Graph/Layer.vue";
import {useSearchStore} from "@/Store/SearchOptions";
import {useRoute} from "vue-router";
import {computed, onMounted, ref, watch} from "vue";
import Button from "@/components/Form/Button.vue";
import ConsequenceForm from "@/components/ConsequenceForm.vue";
import "@/assets/nodeStyle.css"
import Event from "@/views/Page/Graph/Event.vue";

const props = defineProps({
    options: {
      type: Object,
      default: []
    },
    level: {
      type: [Number, String],
      default: 1
    },
    showTree: Boolean,
  })
  const viewIndex = ref(0);
  const showMore = ref(true);
  const openDialog = ref(false);
  const showTreeUpdate = ref(false);
  const showCenter = ref(false);
  const {id} = useRoute().params;
  const store = useSearchStore();
  const subOptions = ref([]);
  const option = ref({});
  const currentLevel = ref(props.options[0]?.level)
  const length = computed(() => subOptions.value.length)
  // load subsequence in on munted
  onMounted(() => {
    if (props.level <= store.level) {
      subOptions.value = store.getNodeById(props.options[0]?.id);
      if (subOptions.value.length) {
        showCenter.value = true;
      }
    }
  });
  // sub node fetch when new node added
  watch(() => props.showTree, (_old, _new) => {
    subOptions.value = store.getNodeById(props.options[0]?.id);
  })

  // onlick to load subsequence
  const getSubOptions = (item, index) => {
    option.value = item;
    viewIndex.value = index;
    subOptions.value = store.getNodeById(item.id);
    showTreeUpdate.value = !showTreeUpdate.value;
    openDialog.value = false;
  }

  // show more subsequence to update level
  const setLevel = () => {
    store.$patch({
      level: store.level + 1,
    })
    showMore.value = false;
    showTreeUpdate.value = !showTreeUpdate.value;
  }

  // plus button added to open new node add form modal
  const openBox = (item) => {
    openDialog.value = true;
    option.value = item;
  }

  // store data in sub node list when form submit
  const getData = (item) => {
    item.position = {x: 0, y: 0};
    item.option_id = option.value.option_id;
    item.parent_id = option.value.id;
    item.node_id = option.value.id;
    item.id = parseInt(store.getNodeLengthAll()) + 1;
    item.viewType = false;
    item.type = 'teleportable';
    item.level = (parseInt(option.value.level) + 1);
    subOptions.value.push(item);
    store.setNode(item);
  }

  // horizantal scroll to center when clide card
  const scrollDiv = (diId) => {
    showCenter.value = false;
    document.querySelectorAll(`#mainDiv${currentLevel.value} .li`).forEach(function (el) {
      el.classList.remove("active");
    });
    document.querySelector("#" + diId).classList.add("active");
    let active = document.querySelector(`#mainDiv${currentLevel.value} .active`);
    let activeWidth = active.clientWidth / 2;
    let pos = active.getBoundingClientRect().left + activeWidth + window.scrollX;

    let parent = document.querySelector(`#mainDiv${currentLevel.value}`);
    let currentscroll = parent.scrollLeft;
    let divwidth = parent.clientWidth;

    pos = pos + currentscroll - divwidth / 2;
    parent.scrollTo({left: pos - 149, behavior: 'smooth'});
    setTimeout(() => {
      // let button = document.querySelector("#" + diId + ' .addButton').getBoundingClientRect();
      // console.log(button.left);
      showCenter.value = true;
    }, 400)
  }


</script>




