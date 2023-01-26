<template>
  <div class="flex justify-center pt-6 mb-4">
    <Button @click="openDialog=true" class="bg-gray-900">Add Consequence</Button>
  </div>
  <ConsequenceForm @getData="getData" v-model="openDialog"/>
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
