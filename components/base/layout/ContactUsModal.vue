<script lang="ts" setup>

import {useModalsStore} from "~/stores/modals";
import ContactUsForm from "~/components/base/forms/ContactUsForm.vue";
import {useFormStore} from "~/stores/form";
import type {contactForm} from "~/types/form";

const contactModalStore = useModalsStore()
const { handleSubmit } = useFormStore()


const contactModalState = computed(() => contactModalStore.contactModalShow)

const isLoading = ref(false)

const isShowingModal = computed({
  get() {
    return contactModalState.value
  },
  set(newValue: boolean) {
    contactModalStore.setContactModalShow(newValue)
  }
})

async function onSubmit(event: contactForm) {
  isLoading.value = true
  await handleSubmit(event)
      .finally(() => {
        isLoading.value = false
        isShowingModal.value = false
      })
}

</script>


<template>
  <UModal v-model="isShowingModal">
    <div class="p-5">
      <div class="flex justify-end">
        <UButton
            color="green"
            icon="i-heroicons-x-mark-20-solid"
            @click="isShowingModal = false"
            size="lg"
        />
      </div>
      <ContactUsForm @submit="onSubmit" :is-loading="isLoading"/>
    </div>
  </UModal>
</template>