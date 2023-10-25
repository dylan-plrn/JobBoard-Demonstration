// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/main.css'],
  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          Lato: [100, 300, 400, 700, 900],
        }
    }],
  ],
  app: {
    head: {
      title: "JobBoard Démonstration"
    }
  }
})


