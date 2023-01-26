<template>

  <div class="bg-slate-50">

    <ConsequenceForm @getData="getData" v-model="openDialog"/>

    <!--    card design-->
    <div style="width:1200px;" class="relative mx-auto snap-mandatory snap-x">
      <!-- layer name -->
      <span class="absolute left-0 -top-6 text-gray-500">{{ currentLevel }}st order consequence</span>

      <div :id="`mainDiv${currentLevel}`"
           class=" flex space-x-10 overflow-x-scroll overflow-y-hidden pb-10 px-10 z-20 mx-auto pt-10 border-gray-400 rounded-md scrollbar-hide border border-dashed border-2 bg-white">

        <!--        empty card for set center node card-->
        <div :id="`mainsub${currentLevel}first`" @click="scrollDiv(`mainsub${currentLevel}first`)" class="li"></div>

        <!-- card design -->
        <div class="li" v-for="(option,index) in options" :id="`mainsub${currentLevel}${index}`"
             @click="scrollDiv(`mainsub${currentLevel}${index}`)">
          <div style="width: 162px;height:158px;z-index: 3;"
               class="relative border bg-white cursor-pointer rounded-2xl shadow-sm  hover:drop-shadow-lg flex"
               :class="(index===viewIndex)&&'outline outline-blue-400'"
          >
            <div @click="getSubOptions(option,index)" class="p-3 flex flex-col justify-between flex-grow">
              <div>
                <div class="inline-block font-medium px-2 py-0.5 rounded bg-orange-100 text-orange-600">
                  <p class="text-xs uppercase">{{ option.category }}</p>
                </div>
                <div class="font-semibold py-1 text-gray-700 text-sm tracking-[0.01785em] line-clamp-2" :title="option.name">
                  {{ option.name }}
                </div>
              </div>
              <div>
                <div class="py-1 font-semibold text-sm text-gray-700" title="Possible profit per $1000 invested">
                  <p>$134,52</p>
                </div>

                <div class="inline-flex items-center text-start rounded-lg px-2 py-0.5 bg-tint text-green-800 font-semibold text-sm">
                  <span>
                    <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" class="fill-green-800"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>
                  </span>
                  {{ option.probability }}%
                </div>
              </div>
            </div>
<!--            <div class="flex absolute inset-x-0 -bottom-5 justify-center space-x-4">-->
<!--              <Button @click="openBox(option)"-->
<!--                      class="rounded-full px-2.5  shadow addButton">-->
<!--                <PlusSmallIcon class="h-6 w-6"/>-->
<!--              </Button>-->
<!--            </div>-->

          </div>
        </div>
        <!--        empty card for set center node card-->
        <div :id="`mainsub${currentLevel}last`" @click="scrollDiv(`mainsub${currentLevel}last`)" class="li"></div>

      </div>
    </div>
    <!--    card design end-->

    <!--    card line design-->
    <div v-if="length && showCenter" class=" px-1 flex justify-center">
      <div class="connector w-10"></div>
      <div class="connector6"></div>
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
          {{ getNumberWithOrdinal(store.level + 1) }} Order Consequences
        </button>
      </div>
      <!--    backdrop layer end-->

      <!--    sub card render sub card self-->
      <div class="">
        <Box :showTree="showTreeUpdate" :level="level+1" class="mx-auto"
             :options="subOptions"/>
      </div>
      <!--    sub card render sub card self-->
    </div>
    <!--    sub card render end-->

  </div>
</template>
<script setup>
  import {PlusSmallIcon} from "@heroicons/vue/24/outline";
  import Box from "@/views/Page/Graph/Box.vue";
  import {useSearchStore} from "@/Store/SearchOptions";
  import {useRoute} from "vue-router";
  import {computed, onMounted, ref, watch} from "vue";
  import Button from "@/components/Form/Button.vue";
  import ConsequenceForm from "@/components/ConsequenceForm.vue";
  import "@/assets/nodeStyle.css"
  import {getNumberWithOrdinal} from "../../../utils/Constant.js";

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
    parent.scrollTo({left: pos - 200, behavior: 'smooth'});
    setTimeout(() => {
      // let button = document.querySelector("#" + diId + ' .addButton').getBoundingClientRect();
      // console.log(button.left);
      showCenter.value = true;
    }, 400)
  }


</script>




