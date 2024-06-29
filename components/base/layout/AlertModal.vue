<script setup lang="ts">

import {useModalsStore} from "~/stores/modals";

const alertsStore = useModalsStore()


const alert = computed(() => alertsStore.alertModal)

const isShowing = computed({
  get() {
    return alert.value.show
  },
  set(newValue: boolean) {
    alertsStore.setAlertModalData({
      text: '',
      type: 'success',
      show: newValue
    })
  }
})
</script>

<template>
    <UModal v-model="isShowing">
      <div class="p-5">
        <div class="flex justify-end">
          <UButton
              color="green"
              icon="i-heroicons-x-mark-20-solid"
              @click="isShowing = false"
              size="lg"
          />
        </div>
        <div class="text-center">
          <img v-if="alert.type === 'success'" class="w-52 mx-auto" src="~/assets/img/gif/success.gif" />
          <img v-if="alert.type === 'error'" class="w-52 mx-auto" src="~/assets/img/gif/error.gif" />
        </div>
        <div class="text-center">
          {{ alert.text }}
        </div>
      </div>
    </UModal>
</template>