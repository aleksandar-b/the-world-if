<template>

  <DialogBox @confirm="saveData" buttonName="Save" :heading='`Add consequence`' v-model="isOpen"
             @cancelClick="emit('update:modelValue', false)">
    <div class="flex flex-col justify-center items-center p-2" style="background-image: url(/dot.png)">
      <Event :option="props.option" />
      <div class="inline-block font-medium px-2 mt-2 py-0.5 rounded bg-gray-100 text-gray-600">
        <p class="text-xs uppercase">THEN</p>
      </div>
    </div>
    <form @submit.prevent="saveData">
      <div class="overflow-auto grid gap-y-4 pb-10 p-6 border-t border-gray-200">
        <FormGroupInput classes="text-2xl" required v-model="form.name" label="Consequence" placeholder="Price of oil decreases by 10%"/>


<!--        <div class="grid grid-cols-2 gap-4">-->
<!--          <FormMultiselect :options="options" v-model="form.impact" label="impact"/>-->
<!--          <FormGroupInput v-model="form.magnitude" label="magnitude"/>-->
<!--        </div>-->

<!--        <div class="grid grid-cols-2 gap-4">-->
<!--          <FormMultiselect optional return-value="name" :options="categories" v-model="form.category"-->
<!--                           label="Category"/>-->
<!--          <FormGroupInput v-model="form.probability" label="Probability (optional)"/>-->
<!--        </div>-->

<!--        <FormGroupTextarea v-model="form.description" label="Description"/>-->

<!--        <div v-for="(item,index) in form.actions" :key="index">-->
<!--          <FormGroupInput v-model="item.action" label="Action" placeholder="Buy Tesla stocks..."/>-->
<!--        </div>-->
<!--        <div>-->
<!--          <Button type="button" @click="form.actions.push({})">Add Action</Button>-->
<!--        </div>-->

        <Toggle class="mt-8" v-model="form.probability" description="Notify me when this event happens in world" label="Notify me" />
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
import Event from "@/views/Page/Graph/Event.vue";
import Toggle from "@/components/Form/Toggle.vue";

const {categories} = useSearchStore();
const options = [
  {id: 'positive', name: 'Positive'},
  {id: 'negative', name: 'Negative'},
  {id: 'neutral', name: 'Neutral'},
]
const {id} = useRoute().params;

const props = defineProps({
  length: {
    type: [Number, String, Boolean],
    default: 0
  },
  option: {
    type: Object,
    default: {},
  },
  modelValue: Boolean,
});

const defaultData = {
  name: '',
  predictor: '',
  impact: '',
  category: props.option.category,
  description: '',
  probability: '',
  label: '',
  value: '',
  actions: [{}],
}
const form = ref(defaultData)
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
