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
            fill-rule="evenodd"
            d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3zm0
        7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0
        0-2H3z"
          />
        </svg>
      </button>
    </div>
    <NuxtLink
      v-for="navLink in navLinks"
      :key="navLink.id"
      class="block px-2 font-semibold text-gray-500 hover:text-gray-700 focus:text-gray-700"
      :to="navLink.path"
      >{{ navLink.name }}</NuxtLink
    >
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
