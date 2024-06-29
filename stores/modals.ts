import { defineStore } from 'pinia'
import type {AlertType} from "~/types/alerts";

export const useModalsStore = defineStore('ModalsState', () => {
    const alertModal = ref<AlertType>({
        text:'',
        type: 'success',
        show: false
    })

    const contactModalShow = ref(false)

    function setAlertModalData(payload : AlertType) {
        alertModal.value = payload
    }

    function setContactModalShow(payload : boolean) {
        contactModalShow.value = payload
    }



    return { alertModal, contactModalShow, setAlertModalData, setContactModalShow }
})