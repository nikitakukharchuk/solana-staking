import { defineStore } from 'pinia'
import type {AlertType} from "~/types/alerts";

export const useAlertsStore = defineStore('AlertsState', () => {
    const alertModal = ref<AlertType>({
        text:'',
        type: 'success',
        show: false
    })
    function setAlertModalData(payload : AlertType) {
        alertModal.value = payload
    }

    return { alertModal, setAlertModalData }
})