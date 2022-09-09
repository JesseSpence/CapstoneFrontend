<template>
  <Navbar />
  <div class="my-container">
    <router-view />
  </div>
  <Foooter />
</template>

<script>
//   const span = document.getElementById("p");

// span.addEventListener("copy", function(event) {
//   event.preventDefault();
//   if (event.clipboardData) {
//     event.clipboardData.setData("text/plain", span.textContent);
//     console.log(event.clipboardData.getData("text"))
//   }
// });
import Foooter from "@/components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import Mycontainer from "./components/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    Mycontainer,
    Navbar,
    Navbar,
    Foooter,
  },
};
</script>

<style>
:root {
  --nav-color: rgb(35, 33, 33);
  --float: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  --off-white: rgb(224, 221, 221);
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:wght@100&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:wght@100&family=Silkscreen&display=swap");
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  width: 100vw;
  padding: 0;
  -moz-osx-font-smoothing: grayscale;
  max-height: fit-content !important;
  position: absolute;

  /* text-align: center;
  color: rgb(25, 23, 23); */
}
#body {
  padding: 1%;
}
Foooter {
  position: absolute;
  bottom: 0;
}
h1 {
  margin: 1.5% 0 3% 3%;
  padding: 0.5px 4px;
  /* font-weight:600; */
}
body {
  background-color: #e07b37;
  background-image: url("https://www.transparenttextures.com/patterns/brick-wall-dark.png");
  overflow-x: hidden !important;
  max-height: fit-content !important;
}
* {
  /* outline: rgba(0, 128, 0, 0.393) 3px solid; */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
nav {
  padding: 30px;
}
h1 {
  background: rgba(0, 0, 0, 0.486);
  border-radius: 10px;
  box-shadow: var(--float);
  border: 2px solid black;
  color: var(--off-white);
  width: fit-content;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #b96042;
}

.sidebar {
  width: 250px;
  height: 100vh;
  position: fixed;
  margin-left: -300px;
  top: 0;
  overflow-y: scroll;
  transition: 0.5s;
  background: rgba(0, 0, 0, 0.714);
}

.my-container {
  transition: 0.4s;
  min-height: 100vh;
}

.active-nav {
  height: 100vh;
  margin-left: 0%;
}

.active-cont {
  margin-left: 250px;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: rgb(35, 33, 33);
}
::-webkit-scrollbar-thumb {
  background: rgb(64, 64, 64);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
