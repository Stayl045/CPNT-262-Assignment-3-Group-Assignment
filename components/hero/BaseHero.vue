<template>
  <section :style="{ backgroundImage: `url(${image})` }" class="h-96 bg-auto">
    <h1 class="pt-10 pl-5 text-white">THIS IS HERO SECTION</h1>
    <p class="pt-5 pl-5 mb-6 text-white">Description</p>

    <!-- <a class ="text-white bg-teal-600 rounded-lg p-2 ml-5" href="assets/images/design.png" :@click= onclick > View Courses</a> -->
  </section>
</template>

<script>
  import bikeImg from "assets/images/design.png";

  export default {
    data() {
      return {
        image: bikeImg,
      };
    },
  };
</script>
