import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [],
  components: [
    "~/components",
    "~/components/ui",
    "~/components/cards",
    "~/components/Coursescard",
    "~/components/header",
    "~/components/hero",
    "~/components/footer",
  ],
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: [],
});
