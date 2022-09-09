<template>
  <div id="register">
    <h1>Register</h1>
    <form @submit.prevent="Register">
      <div class="inputs" id="important">
        <input
          type="name"
          name="name"
          placeholder="name"
          id="name"
          class="formcontrol"
          v-model="name"
          required
        />
        {{ name }}
        <input
          type="surname"
          name="surname"
          placeholder="surname"
          id="surname"
          class="formcontrol"
          v-model="surname"
          required
        />
        {{ surname }}
        <input
          type="text"
          name="Username"
          id="Username"
          placeholder="username"
          class="formcontrol"
          v-model="username"
          required
        />
        {{ Username }}
        <input
          type="email"
          name="email"
          placeholder="email"
          id="email"
          class="formcontrol"
          v-model="email"
          required
        />
        {{ email }}
        <input
          type="text"
          placeholder="password"
          name="password"
          id="password"
          class="formcontrol"
          v-model="password"
          required
        />
        {{ password }}
      </div>

      <button @click="Verify" type="submit">Register</button>
    </form>
  </div>
  <verify/>
</template>
<script>
import verify from "@/components/verify.vue";
export default {
  data() {
    return {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      verification: false,
    };
  },
  components: {
    verify,
  },
  methods: {
    async Register() {
      await this.$store
        .dispatch("Register", {
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password,
          username: this.username,
        })
        .then(
          //run login using the email and password
          await this.$store.dispatch("Login", {
            email: this.email,
            password: this.password,
          })
        )
        .then((this.verification = !this.verification));
      // .then(
      //   //run verify to set the user
      //   //then login and set user into state
      //   await this.$store.dispatch("Verify", this.token),

      //   //load the user page
      //   setTimeout(this.$router.push("/User"), 10000)
      // );
    },

    Verify() {
      this.verification = !this.verification;
    },
  },
};
</script>

<style scoped="">
#register {
  color: rgb(224, 221, 221);
  margin: 10% 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inputgroup {
  display: flex;
  flex-direction: column;
}

input.formcontrol {
  border-radius: 20px;
  background: rgba(48, 44, 44, 0.381);
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-weight: 500;
  margin: 10% auto;
  padding: 2% 0 2% 5%;
}

button {
  background: rgb(42, 42, 42);
  color: var(--off-white);
  border-radius: 10px;
  margin: 1% auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  padding: 5px;
}
</style>
