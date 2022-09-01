<template>
  <Navbar />
  <div class="my-container">
  <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Mycontainer from "./components/mycontainer.vue"
export default {
  data() {
    return {};
  },
  components: {
    Mycontainer,
    Navbar,
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(25, 23, 23);
}
/* *{
  outline: rgba(0, 128, 0, 0.393) 0.5px solid;} */
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}

    .sidebar{
        width:250px;
        height: 100vh;
        position:fixed;
        margin-left: -300px;
        top:0;
        background-color: var(--nav-color);
        transition: 0.5s;
    }

    .my-container{
        margin: 1%;
        transition: 0.4s;
    }
    
    .active-nav{
      height: 100vh;
        margin-left: 0%;
    }
    
    .active-cont{
        margin-left: 250px;
    }
   
</style>
