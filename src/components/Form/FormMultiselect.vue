<template>
    <div class="w-full">
        <InputLabel class="capitalize mb-1" :value="label" :required="required"/>
        <div class="flex items-center space-x-2">
            <Multiselect
                :required="required"
                :placeholder="placeholder"
                :label="labelKey"
                :trackBy="trackKey"
                v-model="modelData"
                :valueProp="returnValue"
                :disabled="disabled"
                :object="object"
                :mode="mode"
                :searchable="searchable"
                :max="max"

                :canClear="canClear"
                :searchStart="searchStart"
                @change="emit('change',$event)"
                @input="emit('update:modelValue', $event);"
                :options="options">
                <template #option="data">
                    {{ data.option[trackKey] }}
                </template>
            </Multiselect>

        </div>
        <InputError :message="error"/>
    </div>
</template>

<script setup>
import InputLabel from "@/components/Form/InputLabel.vue";
import InputError from "@/components/Form/InputError.vue";
import Multiselect from '@vueform/multiselect';
import {onMounted, ref, watch} from "vue";

const props = defineProps({
    label: String,
    required: Boolean,
    modelValue: [String, Number, Boolean, Array, Object],
    max: [Number],
    type: {
        type: String,
        default: 'text'
    },
    trackKey: {
        type: String,
        default: 'name'
    },
    labelKey: {
        type: String,
        default: 'name'
    },
    returnValue: {
        type: String,
        default: 'id'
    },
    placeholder: {
        type: String,
        default: 'Select Option'
    },
    disabled: {
        type: Boolean,
        default: false
    },

    canClear: {
        type: Boolean,
        default: true
    },
    object: {
        type: Boolean,
        default: false
    },
    searchStart: {
        type: Boolean,
        default: true
    },
    mode: {
        type: String,
        default: 'single'
    },
    searchable: {
        type: Boolean,
        default: true
    },
    error: String,
    options: {
        type: [Object, Array],
        default: []
    },


})
const emit = defineEmits(['update:modelValue', 'change']);
const modelData = ref(props.modelValue);
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
