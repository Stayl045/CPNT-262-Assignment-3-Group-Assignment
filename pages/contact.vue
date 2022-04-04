<template>
  <section>
    <header>
      <BaseHeader />
    </header>
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
