<template>
  <section
    :style="{ backgroundImage: `url(${image})` }"
    class="h-screen bg-cover"
  >
    <div class="grid text-center content-center">
      <h1 class="text-white mt-80">{{ title }}</h1>
      <p class="pt-5 pl-5 mb-6 text-white">{{ description }}</p>
      <HeroButton>
        <button class="bg-teal-600 p-7 rounded-md text-white">
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
        title: "THIS IS A HERO SECTION",
        description: "WEB DEVELOPMENT MADE EASY AND FUN!",
        button: "View Courses",
      };
    },
  };
</script>
