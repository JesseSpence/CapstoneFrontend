<template>
  <section class="home">
   Landing
  </section>
  <section id="Login/Register">
   <Login/>
   <Register/>
  </section>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Login,
    Register
}
}
</script>
