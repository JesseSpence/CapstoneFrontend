<template>
  <div id="body">
    <h1>Your Account</h1>
    <div>
      <div class="userbox">
      <update/>
      <h2>{{ user.username }}</h2>
      <h3>{{ user.name }} {{ user.surname }}</h3>
      <div class="userPic">
        <img :src="user.profilePicture" alt="" />
      </div>
    </div>
    <div class="buttons">
      <button @click="Logout">Logout</button>
    </div>
  </div>
  
</div>
</template>

<script>
  import update from "../components/updateModal.vue"
export default {
  data() {
    return {
      active: false,
    };
  },
  components: {
   update, 
  },
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
    toggleModal() {
      this.active = !this.active
    }
  },
    
};
</script>
<style scoped>
  h2{
    font-size: 2.4rem;;
  }
  .buttons{
display: flex;
justify-content: center;
margin:3% 0 0 0;
  }
  button{
    background: rgba(0, 0, 0, 0.714);
    color: var(--off-white)
  }
  i{
    position: absolute;
    right:29%;
    bottom:20.5%;
    filter: drop-shadow(1px 0px 10px  black);
    font-size: 3rem;
  }
  i:hover{
    transform: scale(1.1);
  }
  i:active{
    transform: scale(0.9);
  }
  #body {
   background: rgb(17, 1, 63);
  background: linear-gradient(
    0deg,
    rgb(2, 35, 59) 0%,
    rgb(115, 207, 237)
  );
  position: absolute;
  top: 0;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: cover;
  min-height: 100vh;
}
.userbox {
    display: flex;
    flex-direction: column;
  width: 40vw;
  position: relative;
  background:  var(--nav-color);
  border: 3px solid black;
  border-radius: 10px;
  color:var(--off-white);
  box-shadow: var(--float);
  padding: 2% 2% 1% 1%;
  text-align: center;
  margin: auto;
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
  box-shadow: var(float)
}
img {
  width: 250px;
  height: auto;
}
</style>
