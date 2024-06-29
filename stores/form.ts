import { defineStore } from 'pinia'
import type {contactForm} from "~/types/form";
import type {AxiosResponse} from "axios";


export const useFormStore = defineStore('FormStore', () => {
    const { $api, $utils } = useNuxtApp()
    async function handleSubmit(form : contactForm) {
        await $api.post('/submit', form)
            .then((res: AxiosResponse) => {
                $utils.ssrAlert(res.data.message, "success")
                return res
            })
            .catch((err) => {
                $utils.ssrAlert(err.message, "error")
                return err
            })
    }
    return { handleSubmit }
})