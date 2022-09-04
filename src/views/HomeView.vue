<template>
  <video loop muted autoplay>
    <source src="../assets/landing-vids.mp4" />
  </video>
  <div class="landing">
    <div class="landingbox">
      <h1>hi and welcome to</h1>
    </div>
    <div class="homebox container d-flex flex-column">
      <div class="circlecontainer">
        <img
          class="py-2 homepic"
          src="https://i.ibb.co/x769VpW/P2w9-G5-AB-male-5-cartoon4.png"
          alt="Jesse Spence Portfolio Picture"
        />
      </div>
    </div>

    <h1>Mellows Food Reviews</h1>
  </div>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue"
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Footer,
  },
};
</script>

<style scoped>
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
.landing{
  margin: -2% auto ;
}
.landingbox, h1{
  z-index: 100;
  margin: 10% auto;
  width:fit-content;
}

.homebox {
  z-index: 1;
  height: fit-content;
  width: fit-content;
  margin:-5% auto -5%;
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
