<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import { ref } from 'vue'
import {useFormStore} from "~/stores/form";

const emit = defineEmits(['submit'])
const config = useRuntimeConfig()
const form = ref()

const formStore = useFormStore()

const isLoading = computed(() => formStore.isLoading)

const schema = object({
  email: string().email('Invalid email').required('Required'),
  name: string()
      .min(2, 'Must be at least 2 characters')
      .required('Required'),
  message: string()
      .min(2, 'Must be at least 2 characters')
      .required('Required'),
})

type Schema = InferType<typeof schema>

const state = ref({
  access_key: config.public.accessKey,
  subject: "New Submission from Web3Forms",
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
    <UFormGroup label="Name" name="name">
      <UInput color="green" v-model="state.name" />
    </UFormGroup>

    <UFormGroup label="Email" name="email">
      <UInput color="green" v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Message" name="message">
      <UTextarea color="green" v-model="state.message" />
    </UFormGroup>

    <UButton type="submit" :loading="isLoading" :disabled="isLoading">
      Send message
    </UButton>
  </UForm>
</template>

