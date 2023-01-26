<template>
    <div aria-live="assertive"
         class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50">
        <div class="w-full flex flex-col items-center space-y-4 sm:items-end">

            <transition enter-active-class="transform ease-out duration-300 transition"
                        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
                        leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                        leave-to-class="opacity-0">
                <div v-if="options.isOpen"
                     class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="p-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                <CheckCircleIcon v-if="options.type" class="h-6 w-6 text-green-400"
                                                 aria-hidden="true"/>
                                <XCircleIcon v-else class="h-6 w-6 text-red-600"
                                             aria-hidden="true"/>
                            </div>
                            <div class="ml-3 w-0 flex-1 pt-0.5">
                                <p class="text-sm font-medium text-gray-900">{{ options.title }}</p>
                                <p class="mt-1 text-sm text-gray-500">{{ options.message }}</p>
                            </div>
                            <div class="ml-4 flex-shrink-0 flex">
                                <button @click="options.isOpen = false"
                                        class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span class="sr-only">Close</span>
                                    <XMarkIcon class="h-5 w-5" aria-hidden="true"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref, watch} from 'vue'
import {CheckCircleIcon, XCircleIcon, XMarkIcon} from '@heroicons/vue/24/outline';
import {usePage} from "@inertiajs/inertia-vue3";

const options = ref({
    title: 'Success!',
    message: 'Successfully saved!',
    type: true,
    isOpen: false,
})
const flash = ref(usePage().props.value.flash);
onMounted(() => {
    setMessage(flash.value)
})
const show = ref(false);
watch(() => usePage().props.value, (_new, _old) => {
    for (const [key, value] of Object.entries(_new.errors)) {
        options.value.type = false;
        options.value.message = 'Some details are missing/incorrect.';
        options.value.title = 'Error!';
        autoClose();
        break
    }
    setMessage(_new.flash);

});

// watch(() => usePage().props.value.errors, (_new, _old) => {
//
// });

function setMessage(item) {

    if (item.error) {
        options.value.title = "Error!";
        options.value.type = false;
        options.value.message = item.error;
    }

    if (item.success) {
        options.value.title = "Success!";
        options.value.type = true;
        options.value.message = item.success;
    }

    if (item.title) {
        options.value.title = item.title;
    }

    if (item.error || item.success) {
        autoClose();
    }
}

function autoClose() {
    options.value.isOpen = true;
    setTimeout(() => {
        options.value.isOpen = false;
    }, 5000);
}


</script>
