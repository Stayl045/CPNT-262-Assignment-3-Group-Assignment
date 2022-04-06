<template>
  <section
    v-for="card in cards"
    :key="card.id"
    class="grid text-center content-center bg-slate-100 shadow-lg shadow-slate-400 w-[90%] lg:max-w-[25vw] h-quarter bg-cover bg-center bg-no-repeat rounded-3xl"
    :style="{ 'background-image': `url(${card.image.backgroundImage})` }"
  >
    <!-- <CardImage>{{ card.image }}</CardImage> -->
    <div class="grid text-center content-center">
      <CardTitle>{{ card.title }}</CardTitle>
      <CardDescription>{{ card.description }}</CardDescription>
      <CardButton>
        <button
          class="bg-teal-600 p-3 rounded-md text-white font-semibold hover:bg-gray-800 hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-800 duration-300"
        >
          {{ card.button }}
        </button>
      </CardButton>
    </div>
    <slot></slot>
  </section>
</template>

<script setup>
  const cards = await $fetch("/api/main");
</script>
