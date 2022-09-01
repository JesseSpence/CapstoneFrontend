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
          v-model="Username"
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

      <button type="submit">Register</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      surname: "",
      Username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    Register() {
      this.$store.dispatch("Register", {
        name: this.name,
        surname: this.surname,
        Username: this.Username,
        email: this.email,
        password: this.password,
        user_type: this.Yoh,
      });
    },
  },
};
</script>

<style scoped="">
#register {
  color: rgb(224, 221, 221);
  margin: 10% 0 0 0;
}

.inputgroup {
  display: flex;
  flex-direction: column;
}

input.formcontrol {
  border-radius: 20px;
  background: rgba(48, 44, 44, 0.381);
  width: 180px;
  color: white;
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
