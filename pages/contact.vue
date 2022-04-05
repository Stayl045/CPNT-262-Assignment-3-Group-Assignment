<template>
  <section>
    <header>
      <BaseHeader />
    </header>
    <div class="grid grid-cols-2 gap-2 mt-6 pl-14">
      <div class="flex flex-col">
        <h1 class="font-extrabold text-4xl text-center m-7">Contact Us</h1>
        <h2 class="font-bold text-2xl mt-5">EasyWebDev</h2>
        <p class="font-semibold text-xl mt-3">
          Address: 123456, ABC street, Calgary
        </p>
        <p class="font-semibold text-xl mt-3">mail-id : xyz@gmail.com</p>
        <p class="font-semibold text-xl mt-3">Toll-free : 1-234-567-8910</p>
      </div>
      <div class="mapouter flex flex-wrap">
        <div class="gmap_canvas flex flex-wrap">
          <iframe
            class="h-full w-full flex flex-wrap rounded-xl"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=calgary&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          ></iframe
          ><a href="https://www.whatismyip-address.com/divi-discount/"></a
          ><br />
          ><a href="https://www.embedgooglemap.net">google maps embed html</a>
        </div>
      </div>
    </div>
    <BaseFooter />
  </section>
</template>

<style>
  .gmap_canvas {
    background: none !important;
    height: 500px;
    width: 600px;
  }
  .mapouter {
    position: relative;
    text-align: right;
  }
  .header {
    height: 60px;
    background-color: black;
    bottom: 0;
    box-shadow: 0.1px 0.1px 15px 0.1px #273c75;
    border-radius: 10px;
    display: flex;
  }
</style>
