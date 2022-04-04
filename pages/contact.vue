<template>
  <section>
    <header>
      <BaseHeader />
    </header>
    <div class=" grid grid-cols-2 gap-2  mt-6 p-5">
    <div>
      <h1 class="font-extrabold text-4xl text-center m-7">Contact Us</h1>
      <h2 class="font-bold text-2xl mt-5 ">EasyWebDev</h2>
      <p class="font-semibold text-xl mt-3 pl-3">Address: 123456, ABC street, Calgary</p>
      <p class="font-semibold text-xl mt-3 pl-3">mail-id : xyz@gmail.com</p>
      <p class="font-semibold text-xl mt-3 pl-3">Toll-free : 1-234-567-8910 </p>

    </div>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=calgary&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe
        ><a href="https://www.whatismyip-address.com/divi-discount/"></a><br />
        ><a href="https://www.embedgooglemap.net">google maps embed html</a>
      </div>
    </div>
    </div>
    <BaseFooter />
  </section>
</template>

<style>
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 500px;
    width: 600px;
  }
  .mapouter {
    position: relative;
    text-align: right;
    height: 500px;
    width: 600px;
  }
  .header{
  width: 100%;
  height: 60px;
  background-color:black;
  bottom: 0;
  position: fixed;
  box-shadow: 0.1px 0.1px 15px 0.1px #273c75;
  border-radius:10px;
  display: flex
  }
</style>
