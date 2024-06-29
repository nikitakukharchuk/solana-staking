import {useModalsStore} from "~/stores/modals";

type AlertType = 'error' | 'success'

export const ssrAlert =
    (ctx: any) =>
        (text: string = "", type: AlertType = "error") => {
            const { setAlertModalData } = useModalsStore()
            const payload = {
                text,
                type,
                show: true,
            };
            setAlertModalData(payload)
        };

const utils = (ctx: any) => ({
    ssrAlert: ssrAlert(ctx),
});

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            utils: {...utils(nuxtApp)},
        },
    };
});