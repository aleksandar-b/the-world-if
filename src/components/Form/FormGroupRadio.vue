<template>

        <InputLabel class="capitalize mb-2" :value="label" v-if="label" :required="required"/>

        <div class="flex  space-x-4 capitalize mt-auto">
            <div class="flex  space-x-2 cursor-pointer items-end" v-for="(item,index) in options">
                <InputRadio :name="name" :id="`id${index}`" :disabled="disabled" :checked="modelValue === item"
                            @input="$emit('update:modelValue', $event.target.value)" :value="item" class="mt-1"
                            :required="required"/>
                <InputLabel :class="disabled?'cursor-not-allowed':'cursor-pointer'" :for="`id${index}`" :value="item"/>
            </div>
        </div>

        <InputError :message="error"/>

</template>

<script setup>
import InputLabel from "@/Components/Input/InputLabel.vue";
import InputError from "@/Components/Input/InputError.vue";
import InputRadio from "@/Components/Input/InputRadio.vue";

defineProps({
    label: String,
    required: Boolean,
    modelValue: [String, Number, Boolean],
    type: {
        type: String,
        default: 'text'
    },
    name: {
        type: String,
        default: 'text'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    error: String,
    options: {
        type: Object,
        default: []
    }
})

defineEmits(['update:modelValue']);
</script>
