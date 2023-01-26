<template>
    <div>
        <InputLabel class="capitalize mb-1" :value="label" :required="required"/>
        <input type="file"
               :id="id"
               :disabled="disabled"
               multiple @change="readImgs" id="cover11"
               class="block w-full bg-white border border-gray-300 shadow-sm rounded-md text-slate-500 file:mr-4 file:py-2
                file:px-4 file:border-0 file:bg-stroke file:text-primary-light file:cursor-pointer disabled:cursor-not-allowed"/>
        <InputError class="text-left" :message="error"/>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4   my-6 gap-6">
            <div class="relative" v-for="(img,index) in readImages" :key="index">
                <img :src="creatImg(img)">
            </div>
            <div class="cursor-pointer relative" v-for="(img,index) in images" :key="img.id">
                <p v-if="deleteRouteName" @click="deleteImage(img.id)"
                   class="absolute cursor-pointer translate-x-2 -right-2 z-10
                   shadow ease-in-out duration-300 -translate-y-2 px-2
                   rounded-full bg-red-100 hover:bg-red-500 hover:text-white">
                    x</p>

                <div class="group relative overflow-hidden">

                    <img :src="img[imageKey]" alt="">

                    <div class="absolute inset-0 group-hover:bg-slate-400/70 duration-500 ease-in-out"></div>
                    <div
                        class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center invisible group-hover:visible">
                        <!--                        <div class="text-primary-dark text-sm bg-body">-->
                        <!--                            Copy Image Url-->
                        <!--                        </div>-->

                    </div>
                </div>
                <!--<img class="h-full w-full " src="https://shreethemes.in/hously/layouts/assets/images/property/single/1.jpg">-->
            </div>

        </div>
    </div>

</template>

<script setup>
import InputError from "@/Components/Input/InputError.vue";
import {ref, watch} from "vue";
import InputLabel from "@/Components/Input/InputLabel.vue";
import {useForm} from "@inertiajs/inertia-vue3";

const props = defineProps({
    label: String,
    required: Boolean,
    modelValue: [Object, String],
    disabled: {
        type: Boolean,
        default: false
    },
    images: {
        type: [Object, Array],
        default: []
    },
    error: String,
    deleteRouteName: String,
    id: {
        type: String,
        default: 'id'
    }, imageKey: {
        type: String,
        default: 'image'
    },

})

const emit = defineEmits(['update:modelValue', 'cover', 'deleteResponse']);
const readImages = ref([]);
watch(() => props.images, (_new, _old) => {
    readImages.value = [];
    emit('update:modelValue', []);
})

function readImgs(e) {
    readImages.value = e.target.files;
    emit('update:modelValue', e.target.files);
}

function creatImg(img) {
    return URL.createObjectURL(img);
}

const form = useForm({});

function deleteImage(id) {

    form.post(route(props.deleteRouteName, id), {
        onSuccess: (resp) => {
            emit('deleteResponse', resp.props);
        }
    })
}
</script>
