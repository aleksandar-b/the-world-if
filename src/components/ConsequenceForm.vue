<template>

  <DialogBox @confirm="saveData" buttonName="Save" :heading='`Add consequence`' v-model="isOpen"
             @cancelClick="emit('update:modelValue', false)">
    <form @submit.prevent="saveData">

      <div class="overflow-auto grid gap-y-4 pb-10">
        <FormGroupInput required v-model="form.name" label="Title"/>

        <div class="grid grid-cols-2 gap-4">
          <FormMultiselect :options="options" v-model="form.impact" label="impact"/>
          <FormGroupInput v-model="form.probability" label="probability"/>
        </div>

        <FormMultiselect return-value="name" required :options="categories" v-model="form.category"
                         label="Select Category"/>

        <FormGroupTextarea v-model="form.description" label="Description"/>

        <div v-for="(item,index) in form.actions" :key="index">
          <FormGroupInput v-model="item.action" label="Action"/>
        </div>
        <div>
          <Button type="button" @click="form.actions.push({})">Add Action</Button>
        </div>
      </div>
      <div>
        <div class=" px-4 py-3 flex sm:flex-row-reverse pt-3 ">
          <div>
            <Button type="submit">
              Save
            </Button>
          </div>
          <div>
            <Button @click="isOpen=false" class="!bg-white !text-gray-500 hover:!bg-gray-100 hover:border-white mx-4"
                    type="button">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </form>

    <template #footer>
      <div></div>
    </template>
  </DialogBox>
</template>
<script setup>
import FormGroupInput from "./Form/FormGroupInput.vue";
import DialogBox from "./DialogBox.vue";
import {ref, watch} from "vue";
import Button from "@/components/Form/Button.vue";
import {useRoute} from "vue-router";
import FormMultiselect from "@/components/Form/FormMultiselect.vue";
import {useSearchStore} from "@/Store/SearchOptions";
import FormGroupTextarea from "@/components/Form/FormGroupTextarea.vue";

const {categories} = useSearchStore();
const options = [
  {id: 'positive', name: 'Positive'},
  {id: 'negative', name: 'Negative'},
  {id: 'neutral', name: 'Neutral'},
]
const {id} = useRoute().params;
const defaultData = {
  name: '',
  predictor: '',
  impact: '',
  category: '',
  description: '',
  probability: '',
  label: '',
  value: '',
  actions: [{}],
}
const form = ref(defaultData)
const props = defineProps({
  length: {
    type: [Number, String, Boolean],
    default: 0
  },
  option: {
    type: Object,
    default: [],
  },
  modelValue: Boolean,
});
const isOpen = ref(props.modelValue);
watch(() => props.modelValue, (_new, _old) => {
  isOpen.value = _new;
  if (_new) {
    form.value = {
      name: '',
      predictor: 'Alex B.',
      impact: '',
      probability: '',
      actions: [{}],
    }
  }
})
const emit = defineEmits(['update:modelValue', 'getData']);

const saveData = () => {
  emit('update:modelValue', false);
  emit('getData', form.value);
}
</script>
