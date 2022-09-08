<template>
  <i id="settings" @click="toggleModal">✎</i>
  <div v-if="active" id="modal">
    <form class="iputs">
      <p>name</p>
      <input type="text" v-model="user.name" />
      <p>surname</p>
      <input type="text" v-model="user.surname" />
      <p>email</p>
      <input type="email" v-model="user.email" />
      <p>password</p>
      <input type="text" v-model="user.password" />
      <p>username</p>
      <input type="text" v-model="user.username" />
      <p>contact no.</p>
      <input type="number" v-model="user.contact" />
      <p>type</p>
      <input type="text" v-model="user.type" />
       <p>profilePicture</p>
      <input type="text" v-model="user.profilePicture" />
      <div class="row mt-5">
        <div class="col">
          <button @click="toggleModal">cancel</button>
        </div>
        <div class="col">
          <button @click.prevent="updateUser(user.id)">update</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
   props: ["user"],
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

    updateUser(id) {
      console.log(id);
      return this.$store.dispatch("updateUser", id, {
        name:this.name,
              surname:this.surname,
              email:this.email,
              password:this.password,
              username:this.username,
              contact: this.contact,
              type: this.type,
              profilePicture: this.profilePicture,
      });
    },
  },
   computed: {
    user() {
      return this.$store.state.user;
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
