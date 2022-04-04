<template>
  <!-- <h1>{{ Weather[0] }}</h1> -->
  <ul>
    <h3>Sunrise of Calgary</h3>
    <li v-for="sunrise in sunriseTracker" :key="sunrise.id">
      {{ sunrise.sunrise }}
    </li>
    <h3>Sunset of Calgary</h3>
    <li v-for="sunrise in sunriseTracker" :key="sunrise.id">
      {{ sunrise.sunset }}
    </li>
    <h2>Hi</h2>
  </ul>
  <!-- <pre>{{ Weather }}</pre> -->
</template>

<script setup>
  const { data: sunriseTracker } = await useAsyncData("sunriseTracker", () =>
    $fetch(
      "http://api.sunrise-sunset.org/json?lat=51.049999&lng=-114.066666&formatted=0"
    )
  );
  console.log(sunriseTracker.value);
  // // console.log(components);
  // const { data: Characters } = await useAsyncData("Characters", () =>
  //   $fetch("https://thronesapi.com/api/v2/Characters/")
  // );
  // // console.log(components);
</script>

// https://sunrise-sunset.org/api
