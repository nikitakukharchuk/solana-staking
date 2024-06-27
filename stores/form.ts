import { defineStore } from 'pinia'
import type {contactForm} from "~/types/form";


export const useFormStore = defineStore('FormStore', () => {
    const { $api, $utils } = useNuxtApp()
    const isLoading = ref(false)
    async function handleSubmit(form : contactForm) {
        isLoading.value = true
        await $api.post('/submit', form)
            .then((res: any) => {
                $utils.ssrAlert(res.data.message, "success")
            })
            .catch((err) => {
                $utils.ssrAlert(err.message, "error")
            })
            .finally(() => {
                isLoading.value = false
            })
    }

    return { isLoading, handleSubmit }
})