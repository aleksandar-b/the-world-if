<template>
    <div class="w-full">
        <InputLabel class="capitalize mb-1" v-if="label" :value="label" :required="required"/>
        <div class="flex items-center">
            <slot name="leftInput"/>
            <TextInput :placeholder="placeholder" place :class="classes" :disabled="disabled" :value="modelValue" :type="type" @input="$emit('update:modelValue', $event.target.value)"
                        :required="required"/>
            <slot name="rightInput"/>
        </div>
        <InputError class="text-left" :message="error"/>
    </div>
</template>

<script setup>
import InputLabel from "@/components/Form/InputLabel.vue";
import InputError from "@/components/Form/InputError.vue";
import TextInput from "@/components/Form/TextInput.vue";
import {ref} from "vue";

const props = defineProps({
    label: String,
    placeholder: String,
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
    classes: String,
})
const value = ref(props.modelValue);
defineEmits(['update:modelValue']);

</script>
