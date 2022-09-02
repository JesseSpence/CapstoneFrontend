<template>
  <div id="login">
    <h1>Login</h1>
    <form @submit.prevent="Login">
      <div class="inputgroup">
        <input
          type="email"
          name="email"
          aria-label="Email"
          placeholder="email"
          autocomplete="on"
          class="formcontrol"
          v-model="email"
          required
        />

        <input
          type="password"
          autocomplete="on"
          name="password"
          placeholder="password"
          aria-label="Password"
          class="formcontrol"
          v-model="password"
          required
        />
      </div>
      {{ email }}
      {{ password }}
      <div class="buttons">
        <button type="submit">Login</button>
        <!-- <div v-if="token">
          <button @click="Verify">Browse</button>
        </div> -->

        <div v-if="user">Hello {{ user.username }}</div>
        <div v-else>checking ..</div>
      </div>
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
    async Login() {
      if (!this.$store.state.token) {
        await this.$store.dispatch("Login", {
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("Verify", this.token);
        setTimeout(this.$router.push("/User"), 2000);
        let sidebar = document.querySelector("#sidebar");
        let container = document.querySelector(".my-container");
        sidebar.classList.toggle("active-nav");
        container.classList.toggle("active-cont");
      } else {
        console.log("how have you done this");
      }
    },
    // Verify() {
    //   setTimeout(this.$store.dispatch("Verify", this.token), 5000);
    // },

    Logout() {
      this.$store.commit("Logout");
      console.log("goodbye, see you later");
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
#login {
  display: flex;
  flex-direction: column;
  color: rgb(224, 221, 221);
  margin: 25% 0 0 0;
  justify-content: center;
}

.inputgroup buttons {
  display: flex;
  flex-direction: column;
}

input.formcontrol {
  border-radius: 20px;
  background: rgba(48, 44, 44, 0.381);
  width: 180px;
  color: rgb(224, 221, 221);
  margin: 5% auto;
  padding: 2% 0 2% 5%;
}
button {
  background: rgb(42, 42, 42);
  color: black;
  border-radius: 10px;
  margin: 1% 0 0 0;
}
</style>
