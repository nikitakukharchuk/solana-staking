export default defineNuxtConfig({

  runtimeConfig: {
    public: {
      url: process.env.API_BASE_URL,
      accessKey: process.env.ACCESS_KEY,
    }
  },

  colorMode: {
    preference: 'dark'
  },
  devtools: { enabled: true },
  tailwindcss: {
    configPath: './tailwind.config.ts'
  },
  css: ['~/assets/css/main.css'],
  plugins: [
    '~/plugins/axios',
    '~/plugins/utils'
  ],

  modules: ["@nuxt/ui", "@nuxt/fonts", "@nuxt/icon", '@pinia/nuxt'],
})