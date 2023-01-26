<template>
    <div class="w-full h-32 ">
        <InputLabel class="capitalize mb-2" :value="label" :required="required"/>
        <QuillEditor  v-if="isOpen" class="!rounded-sm overflow-auto" :class="disabled&&'bg-gray-50'"
                     theme="snow"
                     :required="required"
                     :readOnly="disabled"
                     v-model:content="modelData"
                     contentType="html"
                     toolbar="minimal"
        />
        <InputError :message="error"/>
    </div>
</template>

<script setup>
import InputLabel from "@/Components/Input/InputLabel.vue";
import InputError from "@/Components/Input/InputError.vue";
import {QuillEditor} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import {ref, watch} from "vue";

const props = defineProps({
    label: String,
    required: Boolean,
    modelValue: [String, Number, Boolean],
    type: {
        type: String,
        default: 'text'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    error: String,
})
const isOpen = ref(true);
const emit = defineEmits(['update:modelValue']);
const modelData = ref(props.modelValue);
watch(modelData, (_new, _old) => {
    emit('update:modelValue', _new);
})

watch(() => props.modelValue, (_new, _old) => {
    modelData.value = _new;
})
</script>
