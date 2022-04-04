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
    <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4">
      <a
        href="#"
        class="block px-2 py-1 text-white font-semibold hover:bg-gray-800 rounded"
        >Home</a
      >
      <a
        href="#"
        class="block px-2 py-1 text-white font-semibold hover:bg-gray-800 rounded"
        >About</a
      >
      <a
        href="#"
        class="block px-2 py-1 text-white font-semibold hover:bg-gray-800 rounded"
        >Conact</a
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
