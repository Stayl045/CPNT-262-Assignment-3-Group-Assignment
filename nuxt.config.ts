import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [],
  components: ["~/components", "~/components/layouts", "~/components/ui"],
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: [],
});
