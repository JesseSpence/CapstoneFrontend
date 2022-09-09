<template>
  <div class="bod" v-if="!user">
    <div class="notfound">
      <div class="row">
        <div class="col">
          <h2>user not found ...</h2>
          <h3>Error 404</h3>
        </div>
        <div class="col">
          <img
            class="img-flui"
            src="https://i.ibb.co/PWJtDm3/giphy-10.gif"
            width="250"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>

  <div v-if="user" id="body">
    <h1>Your Account</h1>
    <div>
      <div class="userbox">
        <update />
        <h2>{{ user.username }}</h2>
        <h3>{{ user.name }} {{ user.surname }}</h3>
        <div class="userPic">
          <img class="img-fluid" :src="user.profilePicture" alt="" />
        </div>
      </div>
      <div class="buttons">
        <button @click="Logout">Logout</button>
      </div>
    </div>
    <div class="liked">
    <Likedposts/>
  </div>
  </div>
  
</template>

<script>
  import Likedposts from "@/components/Likedposts.vue"
import update from "../components/updateModal.vue";
export default {
  data() {
    return {
      active: false,
    };
  },
  components: {
    update,
    Likedposts
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
      this.active = !this.active;
    },
  },
};
</script>
<style scoped>
.bod {
  background: rgb(10, 10, 10);
  background: linear-gradient(0deg, rgb(17, 17, 17) 0%, rgb(88, 90, 88));
  background-image: url("https://www.transparenttextures.com/patterns/brick-wall-dark.png");
  width: 100vw;
  min-height: 100vh;
  padding: 1% 0 0 0;
}
.notfound {
  height: 40vh;
  width: 60vw;
  padding: 5% 0 0 2%;
  margin: 11% auto;
  background: var(--off-white);
}
.col {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img-flui {
  justify-self: center;
}
h1 {
  margin-left: 4%;
}
.buttons {
  display: flex;
  justify-content: center;
  margin: 3% 0 0 0;
}
button {
  background: rgba(0, 0, 0, 0.714);
  color: var(--off-white);
}
#body {
  background: rgb(211, 65, 49);
  background-image: url("https://www.transparenttextures.com/patterns/brick-wall.png");

  width: 100vw;
  min-height: 100vh;
  padding: 1% 0 0 0;
}
.userbox {
  display: flex;
  flex-direction: column;
  width: 45vw;
  height: 400px;
  position: relative;
  background: var(--nav-color);
  border: 3px solid black;
  border-radius: 10px;
  color: var(--off-white);
  box-shadow: var(--float);
  padding: 2% 2% 1% 1%;
  text-align: center;
  margin: auto;
}

.userPic {
  border-radius: 50%;
  width: 40%;
  margin: 2% auto;
  min-height: 250px;
  align-self: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border: 3px solid rgb(223, 220, 220);
  box-shadow: var(float);
}
img {
  height: 100%;
  object-fit: cover;
}
.img-fluid {
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow-x: hidden;
}
@media screen and (max-width: 900px) {
  .userPic {
    width: 80%;
  }
}
@media screen and (max-width: 500px) {
  .userPic {
    width: 100%;
  }
}
@media screen and (max-width: 450px) {
  .userPic {
    min-height: 150px;
  }
  .img-flui {
    width: 145px;
  }
}
</style>
