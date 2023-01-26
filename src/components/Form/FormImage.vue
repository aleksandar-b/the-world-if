<template>
    <div>
        <label class="cursor-pointer flex items-center justify-center" :for="id">
            <img class="w-full border-dashed border mb-2 h-full" :src="preview">
        </label>
        <InputError class="text-left" :message="error"/>
        <FilePicker :id="id" class="block w-full hidden" :disabled="disabled"
                    @changeValue="emitData" @cover="preview=$event" :required="required"/>
    </div>

</template>

<script setup>
import InputError from "@/Components/Input/InputError.vue";
import FilePicker from "@/Components/Input/FilePicker.vue";
import {ref} from "vue";

const props = defineProps({
    label: String,
    required: Boolean,
    modelValue: [Object, String],
    disabled: {
        type: Boolean,
        default: false
    },
    error: String,
    image: {
        type:[String,Object]
    },
    id: {
        type: String,
        default: 'id'
    },
})

const emit = defineEmits(['update:modelValue', 'cover']);
const preview = ref(props.image ?? '/images/no.png');

function emitData(item) {
    emit('update:modelValue', item);
}
</script>
