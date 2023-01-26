<template>
    <div>
        <InputLabel class="capitalize" :value="label" :required="required" />
        <div class="flex items-center space-x-2">
            <slot name="leftInput"/>
            <TextInput  :disabled="disabled"  :type="type" v-model="modelValue" @input="$emit('update:modelValue', $event.target.value)"
                       class="mt-1" :required="required" />
            <slot name="rightInput"/>
        </div>
        <InputError :message="error"/>
    </div>
</template>

<script setup>
import InputLabel from "@/Components/Input/InputLabel.vue";
import InputError from "@/Components/Input/InputError.vue";
import TextInput from "@/Components/Input/TextInput.vue";

defineProps({
    label: String,
    required: Boolean,
    modelValue: [String,Number,Boolean],
    type:{
      type:String,
      default:'date'
    },
    disabled:{
      type:Boolean,
      default:false
    },
    error: String,
})

defineEmits(['update:modelValue']);
</script>
