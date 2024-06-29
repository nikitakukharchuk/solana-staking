<script lang="ts" setup>
import ContactUsForm from "~/components/base/forms/ContactUsForm.vue";
import {useFormStore} from "~/stores/form";
import type {contactForm} from "~/types/form";

const { handleSubmit } = useFormStore()

const isLoading = ref(false)

async function onSubmit(event: contactForm) {
  isLoading.value = true
  await handleSubmit(event)
      .finally(() => {
        isLoading.value = false
      })
}
</script>

<template>
  <section class="text-center flex flex-col gap-5">
    <div>
      <h2 class="text-30-30-h2 lg:text-50-50-h2-lg">{{$t('services.contact_title')}}</h2>
    </div>
    <div class="flex justify-center px-5">
      <div class="border border-cool-700 shadow-2xl shadow-cool-700 p-10 bg-black rounded-3xl max-w-[500px] w-full">
        <ContactUsForm @submit="onSubmit" :is-loading="isLoading"/>
      </div>
    </div>
  </section>
</template>