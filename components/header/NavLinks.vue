<template>
  <section>
    <div class="flex items-center justify-between px-4 py-3">
      <div>
        <img class="h-8" src="../../assets/images/Skull 2(1).svg" alt="logo" />
      </div>
      <div>
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-white focus:text-white focus:outline-none"
        >
          <svg
            class="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="isOpen"
              d="M310.6 361.4a32 32 0 1 1-45.2 45.2L160 301.3 54.6 406.6a31.7 31.7 0 0 1-45.2 0 32 32 0 0 1 0-45.3L114.8 256 9.4 150.6a32 32 0 1 1 45.2-45.3L160 210.8l105.4-105.4a32 32 0 1 1 45.3 45.3L205.1 256l105.4 105.3z"
            />
            <path
              v-if="!isOpen"
              class="fill-white"
              d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3zm0
        7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0
        0-2H3z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div :class="isOpen ? 'block' : 'hidden'">
      <NuxtLink
        v-for="navLink in navLinks"
        :key="navLink.id"
        class="block px-2 font-semibold text-gray-500 hover:text-white focus:text-gray-600"
        :to="navLink.path"
        >{{ navLink.name }}</NuxtLink
      >
    </div>
  </section>
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
