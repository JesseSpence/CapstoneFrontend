<template>
  <div v-if="user">
    <div class="userbox">
      <h1>{{ user.username }}</h1>
      <h3>{{ user.name }} {{ user.surname }}</h3>
      <div class="userPic">
        <img :src="user.profilePicture" alt="" />
      </div>
    </div>
  </div>
  
  <button @click="Logout">Logout</button>
  <button @click="UserChecker">Look</button>
</template>

<script>
export default {
    computed: {
    
    user() {
      return this.$store.state.user;
        },

     token() {
      return this.$store.state.token;
    },
  },
  methods: {
    UserChecker() {
      console.log(this.user);
      },
      Logout() {
          console.log("goodbye, see you later");
        this.$store.commit("Logout"); 
        this.$router.push("/");
    },
  },
    
};
</script>
<style scoped>
.userbox {
    display: flex;
    flex-direction: column;
  width: 40vw;
  text-align: center;
  margin: 10% auto;
}

.userPic {
  border-radius: 50%;
  width: 250px;
  height: 280px;
  align-self: center;
  overflow: clip;
  display: flex;
  justify-content: center;
  border: 5px solid rgb(223, 220, 220);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
img {
  width: 250px;
  height: auto;
}
</style>
