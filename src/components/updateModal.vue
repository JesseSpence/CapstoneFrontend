<template>
  <i id="settings" @click="toggleModal">✎</i>
  <div v-if="active" id="modal">
    <form class="iputs">
      <p>name</p>
      <input type="text" v-model="name" />
      <p>surname</p>
      <input type="text" v-model="surname" />
      <p>email</p>
      <input type="email" v-model="email" />
      <p>password</p>
      <input type="text" v-model="password" />
      <p>username</p>
      <input type="text" v-model="username" />
      <p>contact no.</p>
      <input type="number" v-model="contact" />
      <p>type</p>
      <input type="text" v-model="type" />
      <div class="row mt-5">
        <div class="col">
          <button @click="toggleModal">cancel</button>
        </div>
        <div class="col">
          <button @click="updateUser">update</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      user: "",
      surname: "",
      email: "",
      username: "",
      password: "",
      contact: "",
      type: "",
    };
  },

  methods: {
    toggleModal() {
      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
#modal {
  z-index: 10000;
  height: 70vh;
  width: 50vw;
  background: rgba(2, 2, 2, 0.721);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
button {
  background: rgb(42, 42, 42);
  color: var(--off-white);
  border-radius: 10px;
  margin: auto;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}
i {
  z-index: 10000;
  position: absolute;
  right: -1vw;
  top: -2vw;
  filter: drop-shadow(1px 0px 10px black);
  font-size: 3rem;
}
i:hover {
  transform: scale(1.1);
}
i:active {
  transform: scale(0.9);
}
@media screen and (max-width: 600px) {
  i {
    font-size: 2rem;
  }
}
</style>
