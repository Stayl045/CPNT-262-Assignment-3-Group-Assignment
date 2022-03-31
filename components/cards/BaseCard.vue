<template>
  <section
    v-for="card in cards"
    :key="card.id"
    class="grid text-center content-center bg-slate-400 shadow-lg shadow-slate-400 w-full max-w-[25vw] h-quarter bg-cover bg-center bg-no-repeat"
    :style="{ 'background-image': `url(${card.image.backgroundImage})` }"
  >
    <!-- <CardImage>{{ card.image }}</CardImage> -->
    <CardTitle>{{ card.title }}</CardTitle>
    <CardDescription>{{ card.description }}</CardDescription>
    <slot></slot>
  </section>
</template>

<script setup>
  const cards = await $fetch("/api/main");
</script>
