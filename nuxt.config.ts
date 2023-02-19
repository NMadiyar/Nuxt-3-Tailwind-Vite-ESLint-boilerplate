// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint";
export default defineNuxtConfig({
  vite: {
    plugins: [eslintPlugin()],
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  css: ["~/assets/styles/app.scss"],
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },
  // tailwindcss: {
  //   cssPath: "~/assets/styles/tailwind.scss",
  // },
});
