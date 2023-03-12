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
           class="flex space-x-10 overflow-x-scroll overflow-y-hidden pb-10 px-10 z-20 mx-auto pt-10 rounded-md scrollbar-hide bg-repeat shadow-sm shadow-slate-200 border border-slate-200" style="background-image: url(/src/assets/dot.png)">

        <!--        empty card for set center node card-->
        <div :id="`mainsub${currentLevel}first`" @click="scrollDiv(`mainsub${currentLevel}first`)" class="li"></div>

        <!-- card design -->
        <div class="li" v-for="(option,index) in options" :id="`${option.id}`" @click="scrollDiv(`${option.id}`); setArrows(option)">
          <Event :index="index" :option="option" :view-index="viewIndex" :get-sub-options="getSubOptions" :open-box="openBox" :onmouseenter="() => onHover(option)" :onmouseleave="() => onHover(option, true)" />
        </div>
        <!--        empty card for set center node card-->
        <div :id="`mainsub${currentLevel}last`" @click="scrollDiv(`mainsub${currentLevel}last`)" class="li"></div>

      </div>
    </div>
    <!--    card design end-->


    <!--    sub card render-->
    <div class="w-full pt-10 relative" v-if=" length">

      <!--    backdrop layer-->
      <div v-if="showMore"
           class="w-full absolute inset-0 z-10 backdrop-blur-sm  bg-gradient-to-t from-white  flex justify-center align-middle items-center">
        <button @click="setLevel()" type="button"
                class="relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2
                 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold
                 h-12 px-6 rounded-lg flex items-center dark:bg-slate-700
                 dark:hover:bg-slate-600 pointer-events-auto">
          {{ converter.toOrdinal(currentLevel + 1) }} Order Consequences
        </button>
      </div>
      <!--    backdrop layer end-->

      <!--    sub card render sub card self-->
      <div class="">
        <Layer :showTree="showTreeUpdate" :level="level+1" class="mx-auto" :options="subOptions" :arrows="arrows" @on-child-hover="onChildHover"/>
      </div>
      <!--    sub card render sub card self-->
    </div>
    <!--    sub card render end-->

  </div>
</template>
<script setup>
import converter from "number-to-words";
import Layer from "@/views/Page/Graph/Layer.vue";
import {useSearchStore} from "@/Store/SearchOptions";
import {useArrowsStore} from "@/Store/Arrows";
import {useRoute} from "vue-router";
import {computed, onDeactivated, onMounted, ref, watch} from "vue";
import Button from "@/components/Form/Button.vue";
import ConsequenceForm from "@/components/ConsequenceForm.vue";
import "@/assets/nodeStyle.css"
import Event from "@/views/Page/Graph/Event.vue";
import colors from "tailwindcss/colors";
import {onBeforeUnmount, onUnmounted} from "@vue/runtime-core";

const emit = defineEmits(['on-child-hover'])

const props = defineProps({
    options: {
      type: Object,
      default: []
    },
    arrows: {
      type: Object,
      default: {}
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

    // add scroll event
    const mainDiv = document.getElementById(`mainDiv${currentLevel.value}`);
    const arrows = useArrowsStore().arrows;

    mainDiv.addEventListener('scroll', function () {
      // scroll position of mainDiv
      const scrollPosition = mainDiv.scrollLeft;
      // scroll position of subDiv
      console.log("scroll-mainDiv-scrollPosition", scrollPosition);

      Object.values(arrows).forEach((arrow) => {
          arrow?.arrow?.position();
      });
      Object.values(props.arrows).forEach((arrow) => {
          arrow?.arrow?.position();
      });
    }, false);
  })

  onDeactivated(() => {
    useArrowsStore().removeArrows();
  })
  onUnmounted(() => {
    useArrowsStore().removeArrows();
  })

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


  const setArrows = (option) => {
    removeArrows();

    subOptions.value.forEach((subOption) => {
      if (subOption.id !== option.id) {
        // eslint-disable-next-line no-undef
        const arrow = new LeaderLine({
          start: document.getElementById(option.id),
          end: document.getElementById(subOption.id),
          startSocket: 'bottom',
          endSocket: 'top',
          startPlug: 'disc',
          endPlug: 'arrow1',
          size: 2,
          dash: {len: 10, gap: 16},
          color: colors.gray[200]
        });

        const data = {arrow, start: option.id, end: subOption.id, level: currentLevel.value};
        useArrowsStore().setArrows(subOption.id, data);
      }
    })
  }

  const removeArrows = () => {
    const arrows = useArrowsStore().arrows;
    Object.values(arrows).forEach((arrow) => {
      if (arrow.level >= currentLevel.value) {
        useArrowsStore().removeArrow(arrow.end);
      }
    })
  }

  // horizantal scroll to center when clide card
  const scrollDiv = (diId) => {
    showCenter.value = false;
    document.querySelectorAll(`#mainDiv${currentLevel.value} .li`).forEach(function (el) {
      el.classList.remove("active");
    });
    document.querySelector(`[id='${diId}']`).classList.add("active");
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

  const onHover = (option, isMouseLeave) => {
    emit('on-child-hover', option, isMouseLeave);
  }

function highlight(arrows, isMouseLeave, option) {
   if (isMouseLeave) {
     arrows[option.id].arrow.setOptions({color: colors.gray[200], dash: {len: 10, gap: 16}});
   } else {
     arrows[option.id].arrow.setOptions({color: colors.gray["600"], dash: false});
   }
}

const onChildHover = (option, isMouseLeave) => {
  const arrows = useArrowsStore().arrows;

  highlight(arrows, isMouseLeave, option);

  let event = { id: option.parent_id, parent_id: arrows[option.parent_id]?.start };
  while (event.id) {
    highlight(arrows, isMouseLeave, event);
    event = { id: arrows[event.parent_id]?.start, parent_id: arrows[event.parent_id]?.end }
  }
}

</script>




