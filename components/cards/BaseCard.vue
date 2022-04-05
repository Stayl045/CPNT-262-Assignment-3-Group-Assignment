<template>
  <section
    v-for="card in cards"
    :key="card.id"
    class="grid text-center content-center bg-slate-100 shadow-lg shadow-slate-400 w-[90%] lg:max-w-[25vw] h-quarter bg-cover bg-center bg-no-repeat"
    :style="{ 'background-image': `url(${card.image.backgroundImage})` }"
  >
    <!-- <CardImage>{{ card.image }}</CardImage> -->
    <div class="grid text-center content-center">
      <CardTitle>{{ card.title }}</CardTitle>
      <CardDescription>{{ card.description }}</CardDescription>
    </div>
    <slot></slot>
  </section>
</template>

<script setup>
  const cards = await $fetch("/api/main");
</script>
