<template>
  <video loop muted autoplay>
    <h1>yo</h1>
    <source src="../assets/landing-vids.mp4" />
  </video>
  <div class="landing">
    <div class="landingbox"></div>
    <div class="homebox container d-flex flex-column">
      <div class="circlecontainer">
        <img
          class="py-2 homepic"
          src="https://i.ibb.co/x769VpW/P2w9-G5-AB-male-5-cartoon4.png"
          alt="Jesse Spence Portfolio Picture"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style>
video {
  min-width: 100vw;
  max-width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
}
.landingbox {
  height: 100vh;
  width: 100vw;
  margin: auto;
  position:fixed;
  top: 0;
  left: 0;
  background: rgba(234, 231, 231, 0.253);
  filter: blur(2px);
}
.homebox {
  z-index: 1;
  height: fit-content;
  width: fit-content;
  margin: auto ;
}

.homepic {
  filter: drop-shadow(0px 10px 3px black);
  position: absolute;
  width: 200px;
  border-radius: 70%;
}
.circlecontainer {
  display: flex;
  justify-content: center;
  position: relative;
  height: 215px;
  width: 215px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.755);
  animation: shadow linear infinite 2s;
  box-shadow: 1px 1px 8px 8px grey;
}
@keyframes shadow {
  0% {
    box-shadow: 1px 1px 8px 8px grey;
  }
  50% {
    box-shadow: 1px 1px 25px 10px black;
  }
}
</style>
