// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: ''
  },
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true
  }
});
