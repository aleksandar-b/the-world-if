<template>
    <div>
        <InputLabel :value="label" :required="required" />
        <div class="flex items-center space-x-2">
            <slot name="leftInput"/>
            <TextArea :placeholder="placeholder" :value="modelValue" :rows="rows" :disabled="disabled" :type="type"
                      @input="$emit('update:modelValue', $event.target.value)"
                      class="mt-1" :required="required" />
            <slot name="rightInput"/>
        </div>
        <InputError class="text-left" :message="error"/>
    </div>
</template>

<script setup>
import InputLabel from "@/components/Form/InputLabel.vue";
import InputError from "@/components/Form/InputError.vue";
import TextArea from "@/components/Form/TextArea.vue";

defineProps({
    label: String,
    placeholder: String,
    required: Boolean,
    modelValue: String,
    type: {
        type: String,
        default: 'text'
    }, rows: {
        type: String,
        default: '3'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    error: String,
})

defineEmits(['update:modelValue']);
</script>
