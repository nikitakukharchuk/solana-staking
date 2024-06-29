<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import { ref } from 'vue'

const props = defineProps({
  isLoading: { type: Boolean, default: false },
})

const emit = defineEmits(['submit'])
const config = useRuntimeConfig()
const form = ref()



const schema = object({
  email: string().email('Invalid email').required('Required'),
  name: string().required('Required')
      .min(2, 'Must be at least 2 characters'),

  message: string()
      .required('Required')
      .min(2, 'Must be at least 2 characters')
})

type Schema = InferType<typeof schema>

const state = ref({
  access_key: config.public.accessKey,
  subject: "New Submission from SOLANA",
  name: "",
  email: "",
  message: "",
})

function clearForm () {
  state.value.name = ''
  state.value.email = ''
  state.value.message = ''
}

function onSubmit (event: FormSubmitEvent<Schema>) {
  emit('submit', {...event.data})
  clearForm()
}
</script>

<template>
  <UForm ref="form" :schema="schema" :state="state" :disabled="isLoading" class="space-y-4" @submit="onSubmit">
    <UFormGroup :label="$t('layout.contact_form.name')" name="name">
      <UInput color="green" v-model="state.name" />
    </UFormGroup>

    <UFormGroup :label="$t('layout.contact_form.email')" name="email">
      <UInput color="green" v-model="state.email" />
    </UFormGroup>

    <UFormGroup :label="$t('layout.contact_form.message')" name="message">
      <UTextarea color="green" v-model="state.message" />
    </UFormGroup>

    <UButton type="submit" :loading="isLoading" :disabled="isLoading">
      {{ $t('layout.contact_form.send_message') }}
    </UButton>
  </UForm>
</template>

