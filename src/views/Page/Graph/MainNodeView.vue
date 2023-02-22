<template>
  <div class="flex justify-center my-4">
    <button @click="openDialog=true" class="rounded text-gray-600 border-2 border-gray-500 p-1.5 px-5">Add </button>
  </div>
  <ConsequenceForm @getData="getData" :option="props.option" v-model="openDialog"/>
</template>

<script setup>
import {ref} from "vue";
import Button from "@/components/Form/Button.vue";
import ConsequenceForm from "@/components/ConsequenceForm.vue";
import {useSearchStore} from "@/Store/SearchOptions";

const {setNode, getNodeLengthAll} = useSearchStore();
const props = defineProps({
  option: {
    type: Object,
    default: [],
  },
});

const openDialog = ref(false);

//set new node in store
const getData = (item) => {
  item.option_id = props.option.id;
  item.parent_id = props.option.id;
  item.id = parseInt(getNodeLengthAll()) + 1;
  item.viewType = false;
  item.type = 'teleportable';
  item.level = 1;
  setNode(item);
}
</script>
