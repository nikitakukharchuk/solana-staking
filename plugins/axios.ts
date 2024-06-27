import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const defaultUrl = config.public.url;

    let api = axios.create({
        baseURL: defaultUrl,
        headers: {
            common: {},
        },
    });
    return {
        provide: {
            api: api,
        },
    };
});