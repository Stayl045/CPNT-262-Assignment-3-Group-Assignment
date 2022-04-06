<template>
  <section>
    <header>
      <BaseHeader />
    </header>
    <!-- <h1>{{ Weather[0] }}</h1> -->
    <h1 class="font-extrabold text-4xl text-center m-7">
      The Courses We Offer
    </h1>
    <div class="grid grid-cols-2 gap-2 mt-6 shadow-lg">
      <div>
        <img
          src="https://images.pexels.com/photos/6002000/pexels-photo-6002000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="online"
          class="h-96 w-full"
        />
      </div>

      <div
        class="bg-slate-200 grid text-center content-center pl-10 pt-3 px-10"
      >
        <h1 class="text-black font-extrabold text-2xl">ONLINE & FLEXIBLE</h1>
        <p class="text-black font-medium text-xl">
          Our courses are all online and self-paced, meaning you can take them
          wherever and whenever it’s convenient for you.
        </p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2 mt-6 shadow-lg ">
      <div
        class="bg-slate-200 grid text-center content-center pl-10 pt-3 px-10"
      >
        <h1 class="text-black font-extrabold text-2xl">PROJECT-BASED</h1>
        <p class="text-black font-medium text-xl">
          Our expertly-designed courses are also project-based, meaning you
          won’t just learn theory.
        </p>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="online"
          class="h-96 w-full"
        />
      </div>
    </div>
    
    <div class="bg-slate-200 mt-6 mx-25 p-5 shadow-lg">
      
      <ul>
        <h3 class="font-bold ">Sunrise of Calgary</h3>
        <li v-for="sunrise in sunriseTracker" :key="sunrise.id">
          {{ sunrise.sunrise }}
        </li>
        <h3 class="font-bold" >Sunset of Calgary</h3>
        <li v-for="sunrise in sunriseTracker" :key="sunrise.id">
          {{ sunrise.sunset }}
        </li>
        </ul>
    </div>
    <BaseFooter />
  </section>
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
