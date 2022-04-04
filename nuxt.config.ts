import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [],
  components: [
    "~/components",
    "~/components/layouts",
    "~/components/ui",
    "~/components/cards",
    "~/components/Coursescard",
    "~/components/header",
    "~/components/hero",
    "~/server/api",
    "~/components/footer",
    "~/pages",
  ],
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: [],
});
