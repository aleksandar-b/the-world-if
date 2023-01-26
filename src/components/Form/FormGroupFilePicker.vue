<template>
    <div class="text-left flex space-x-4">
        <div class="flex-1">
            <InputLabel v-if="label" class="mb-1" :value="label" :required="required"/>
            <div class="flex items-center space-x-2 ">
                <slot name="leftInput"/>
                <FilePicker class="block w-full" :disabled="disabled"
                            @changeValue="emitData" @cover="image=$event" :required="required"
                />
                <slot name="rightInput"/>
            </div>
            <InputError :message="error"/>
        </div>
        <div v-if="preview">
            <img class="h-20" :src="image">
        </div>
        <div v-if="preview" class="pt-6">
            <Button>View File</Button>
        </div>
    </div>
</template>

<script setup>
import InputLabel from "@/Components/Input/InputLabel.vue";
import InputError from "@/Components/Input/InputError.vue";
import FilePicker from "@/Components/Input/FilePicker.vue";
import {ref} from "vue";
import Button from "@/Components/Button.vue";

const props = defineProps({
    label: String,
    required: Boolean,
    modelValue: [Object, String],
    disabled: {
        type: Boolean,
        default: false
    }, preview: {
        type: Boolean,
        default: false
    },
    error: String,
    image: String,
})

const emit = defineEmits(['update:modelValue', 'cover']);
const image = ref(props.image);

function emitData(item) {
    emit('update:modelValue', item);
}

</script>
