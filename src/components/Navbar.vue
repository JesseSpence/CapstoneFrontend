<template>
  <div class="sidebar" id="sidebar">
    <section id="Login/Register">
      <Login />
      <Register />
    </section>
  </div>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><router-link class="nav-link active" to="/"
            ><img width="50" src="https://i.ibb.co/nfvy8n7/pngwing-com.png" />
            Mellow Reviews</router-link
          ></a
        >
        <button
          class="toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-ico">🍔</span>
        </button>
        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">Contact</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/Posts">Reviews</router-link>
            </li>
            <li v-if="user" class="nav-item">
              <router-link class="nav-link" to="/User"
                ><i class="fa-solid fa-user"></i
              ></router-link>
            </li>
            <li
              class="nav-item"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              v-else
              id="menu-bn"
              @click="accountToggle()"
            >
              <i class="fa-solid fa-user"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
export default {
  components: {
    Login,
    Register,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    accountToggle() {
      let sidebar = document.querySelector("#sidebar");
      let container = document.querySelector(".my-container");

      sidebar.classList.toggle("active-nav");
      container.classList.toggle("active-cont");
    },
  },
};
</script>
<style scoped>
nav {
  z-index: 1000;
  background: var(--nav-color);
}
ul {
  list-style: none;
  display: flex;
  width: 35vw;
  margin: 0 0 0 60%;
}

li {
  padding: 1%;
  margin: auto;
  color: var(--off-white) !important;
}
li:hover,
.navbar-brand:hover {
  transform: scale(1.02);
}

nav a.router-link-exact-active {
  color: #b96642;
}

.navbar-brand {
  color: var(--off-white);
}
.toggler {
  display: none;
  background-color: rgba(0, 0, 0, 0.386);
}
.navbar-toggler-icon {
  color: white !important;
}
.sidebar {
  overflow-y: scroll;
  min-height: 100%;
  z-index: 999;
}
@media screen and (max-width: 992px) {
  .toggler {
    display: block;
  }
  ul {
    flex-direction: column;
    margin: auto;
  }
  @media screen and (max-width: 630px) {
  }
}
.navbar {
  padding: 0;
}
.sidebar {
  height: 100vw;
  width: 250px;
  background: rgba(0, 0, 0, 0.714);
  position: fixed;
  z-index: 100;
}
</style>
