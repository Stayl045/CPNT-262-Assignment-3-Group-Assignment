<template>
  <section
    :style="{ backgroundImage: `url(${image})` }"
    class="max-h-full h-[80vh] bg-center"
  >
    <div class="grid text-center content-center">
      <h1 class="text-white mt-60 text-3xl font-bold accent-cyan-500">
        {{ title }}
      </h1>
      <p class="pt-5 pl-5 mb-6 text-white font-semibold">{{ description }}</p>
      <HeroButton>
        <button
          class="bg-teal-600 font-semibold p-5 rounded-md text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-800 duration-300"
        >
          <a class="" href="/courses"> {{ button }}</a>
        </button>
      </HeroButton>
    </div>
  </section>
</template>

<script>
  import bikeImg from "assets/images/design.png";

  export default {
    data() {
      return {
        image: bikeImg,
        title: "CODING MADE EASY!",
        description: "LEARN WEB DEVELOPMENT THE FUN AND EASY WAY!",
        button: "View Courses",
      };
    },
  };
</script>

<style scoped>
  h1,
  p {
    text-shadow: 2px 2px black;
  }
</style>
