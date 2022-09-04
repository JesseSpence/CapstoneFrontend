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
      {{ password }}
      <div class="buttons">
        <button @click="loader" type="submit">Login</button>
        <!-- <div v-if="token">
          <button @click="Verify">Browse</button>
        </div> -->

        <div v-if="user">Hello {{ user.username }}</div>
        <div v-if="load">checking ..</div>
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
      load : false,
    };
  },
  methods: {
    async Login() {
      if (!this.$store.state.token) {

        //set token into state, starting the login process
        await this.$store.dispatch("Login", {
          email: this.email,
          password: this.password,
        });

        //then login and set user into state
        this.$store.dispatch("Verify", this.token);

        //load the user page
        setTimeout(this.$router.push("/User"), 2000);

        //close the login bar, it will be unavailable until user logs out
        let sidebar = document.querySelector("#sidebar");
        let container = document.querySelector(".my-container");
        sidebar.classList.toggle("active-nav");
        container.classList.toggle("active-cont");
      }
    //user should not be able to see login once the token is set
      else {
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
    loader(){
      this.load = !this.load;
    }
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
  color: var(--off-white);
  border-radius: 10px;
  margin: 1% 0 0 0;
  font-size: 1rem;
  padding:5px;
}
</style>
