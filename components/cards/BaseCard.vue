<template>
  <section
    v-for="card in cards"
    :key="card.id"
    class="grid text-center content-center justify-between bg-slate-400 shadow-lg shadow-slate-400 lg:w-[25vw] max-w-2/4 bg-cover bg-center"
    :style="{ 'background-image': `url(${card.image.backgroundImage})` }"
  >
    <!-- <CardImage>{{ card.image }}</CardImage> -->
    <div class="grid text-center content-center px-8">
      <CardTitle>{{ card.title }}</CardTitle>
      <CardDescription>{{ card.description }}</CardDescription>
    </div>
    <slot></slot>
  </section>
</template>

<script setup>
  const cards = await $fetch("/api/main");
</script>
