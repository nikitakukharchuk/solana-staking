<script lang="ts" setup>
import ContactUsForm from "~/components/base/forms/ContactUsForm.vue";
import {useFormStore} from "~/stores/form";

const { handleSubmit } = useFormStore()

async function onSubmit(event: any) {
  await handleSubmit(event)
}
</script>

<template>
  <section class="mx-auto container text-center">
    <div>
      <h2>Contact Us</h2>
    </div>
    <div class="w-2/4 mx-auto">
      <div class="border border-cool-700 shadow-2xl shadow-cool-700 p-10 bg-black rounded-3xl">
        <ContactUsForm @submit="onSubmit"/>
      </div>
    </div>
  </section>
</template>