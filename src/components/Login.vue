<template>
  <div id="login">
    <form @submit.prevent="Login">
      <div class="inputgroup">
        
        <input
          type="email"
          aria-label="Email"
          placeholder="email"
          class="formcontrol"
          v-model="email"
          required
        />
        
        <input
          type="password"
          placeholder="password"
          aria-label="Password"
          class="formcontrol"
          v-model="password"
          required
        />
      </div>
      {{ email }}
      {{ password }}

      <button type="submit">Login</button>
      <div v-if="token">
        <button @click="Verify">Browse</button>
      </div>
      <div v-else>checking ..</div>
      <div v-if="user">Hello {{ user.username }}</div>
    </form>
  </div>
  <button @click="Logout">Logout</button>
</template>
<script>
export default {
  computed: {
    token() {
      return this.$store.state.token;
    },
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    Login() {
      this.$store.dispatch("Login", {
        email: this.email,
        password: this.password,
      });
    },
    Verify() {
      this.$store.dispatch("Verify", this.token);
    },
    Logout() {
      this.$store.commit("Logout");
    },
  },
};
</script>
<style scoped>
#login {
    color: rgb(114, 109, 109);
  margin: 50% 0 0 0;
}

.inputgroup {
  display: flex;
  flex-direction: column;
}

input.formcontrol {
 border-radius:20px;
 background: rgba(48, 44, 44, 0.381);
  width: 180px;
  color: white;
  margin: 5% auto;
  padding: 2% 0 2% 5%;
}
</style>
