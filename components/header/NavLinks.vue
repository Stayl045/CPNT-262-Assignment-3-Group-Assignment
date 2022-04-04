<template>
  <div class="flex items-center justify-between">
    <div>
      <button
        @click="isOpen = !isOpen"
        type="button"
        class="block text-gray-500 focus:text-white focus:outline-none"
      >
        <svg
          class="h-6 w-6 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
        >
          <path
            v-if="isOpen"
            fill-rule="evenodd"
            d="M376.6 427.5a32 32 0 1 1-49.2 41L192 305 56.6 467.6a32 32 0 1 1-49.2-41l143-171.5L7.3 84.5a32 32 0 1 1 49.2-41L192 206 327.4 43.5a32 32 0 1 1 49.2 41L233.6 256l143 171.5z"
          />
          <path
            v-if="!isOpen"
            fill-rule="evenodd"
            class="fill-white"
            d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3zm0
        7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0
        0-2H3z"
          />
        </svg>
      </button>
    </div>
    <div :class="isOpen ? 'block' : 'hidden'">
      <NuxtLink
        v-for="navLink in navLinks"
        :key="navLink.id"
        class="block px-2 font-semibold text-gray-500 hover:text-gray-700 focus:text-gray-700"
        :to="navLink.path"
        >{{ navLink.name }}</NuxtLink
      >
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
  };
</script>

<script setup>
  const navLinks = [
    {
      name: "Courses",
      path: "/courses",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
</script>
