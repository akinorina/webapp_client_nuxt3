// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { typeCheck: true },
  srcDir: 'src/',
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./src/stores/**'],
  },
  devServer: {
    port: 4000
  },
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: '',
    }
  }
})
