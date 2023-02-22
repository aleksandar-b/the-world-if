<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import {
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import Button from "@/components/Form/Button.vue";

const props = defineProps({
  modelValue: Boolean,
  heading: String,
  description: String,
  buttonName: {
    type: String,
    default: 'Delete'
  },
  btnClass: String,
  isCancel: {
    type: Boolean,
    default: true
  },
  overflowHidden: {
    type: Boolean,
    default: false
  },
  isFooter: {
    type: Boolean,
    default: true
  },
  classes: {
    type: String,
    default: 'w-full max-w-xl'
  },
  showCancelButton: {
    type: Boolean,
    default: true
  },
  bodyClass: {
    type:String,
    default:'mt-2 h-4/5 px-6'
  }
})

const emit = defineEmits(['update:modelValue', 'confirm', 'cancelClick']);

function cancelDialog() {
  emit('cancelClick');
  emit('update:modelValue', false);
}
</script>

<template>

  <TransitionRoot appear :show="modelValue" as="template">
    <Dialog as="div" @close="cancelDialog" class="relative z-40">
      <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25"/>
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
            class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
          >
            <DialogPanel
                class=" transform rounded-sm bg-white text-left align-middle shadow-xl transition-all rounded-xl"
                :class="`${overflowHidden&&'overflow-hidden'} ${classes}`">

              <slot name="header">
                <DialogTitle as="h3"
                             class="text-lg leading-6 font-medium text-gray-900 flex justify-between p-6">
                  <div>
                    {{ heading }}
                  </div>
                  <div>
                    <XMarkIcon @click="cancelDialog"
                               class="h-5 w-5 text-primary-light cursor-pointer hover:text-gray-600 ease-in-out"/>
                  </div>
                </DialogTitle>
              </slot>
              <div class="pt-0 ">
                <div :class="bodyClass">
                  <slot>{{ description }}</slot>
                </div>
              </div>

              <slot name="footer" v-if="isFooter">
                <div class="bg-gray-50 px-4 py-3 sm:px-6 flex sm:flex-row-reverse pt-3 ">
                  <div>
                    <Button :class="btnClass" type="submit" @click="emit('confirm')">
                      {{ buttonName }}
                    </Button>
                  </div>
                  <div v-if="showCancelButton">
                    <Button
                        class="!bg-white !text-gray-500 hover:!bg-gray-100 hover:border-white mx-4"
                        v-if="isCancel"
                        type="button"
                        @click="cancelDialog">
                      Cancel
                    </Button>
                  </div>
                </div>
              </slot>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
