<template>
  /  <section
    v-for="card in cards"
    :key="cards.id"
    class="flex flex-wrap flex-shrink-0 justify-center text-center justify-items-center gap-20 bg-cover mt-16 rounded-md mb-10"
  >
    <CardTitle>{{ card.title }}</CardTitle>
  </section>
</template>

<script setup>
  const cards = await $fetch("/api/main");
</script>
