<template>
<div id="body">
  <div v-if="posts" class="posts">
    <div v-for="post in posts" :key="post.id" >
      <router-link
        :to="{ name: 'single blog post view', params: { id: post.id } }"
      >
      <div class="post">
        <h3>{{ post.title }}</h3>
        <div class="foodpic">
          <img width="200" :src="post.logo" alt="">
        </div>
<div class="postdeets">
  <h5>{{post.rating}}/10</h5>
  <p>{{post.restaurant}}</p>

</div>
        </div>
      </router-link>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("ShowPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>
<style scoped>
a{
  text-decoration: none;
}

#body {
  background: rgb(40, 2, 2);
  background: linear-gradient(
    0deg,
    rgb(55, 0, 0) 0%,
    rgb(240, 67, 67) 100%
  );
  background-repeat: no-repeat;
  background-position: cover;
  min-height: 100vh;
}

.post{
  color:rgb(255, 255, 255);
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 25vw;
}

.foodpic{
  display: flex;
  width:10vw;
  height:20vh;
  overflow: clip;
  margin: auto;
  border-radius: 50%;
}

.foodpic::after{
  
}

h5{
  background: rgba(255, 255, 255, 0.107);
  color: rgb(253, 253, 253);
  width: 6vw;
  padding:5% 0 0 0 ;
  height: 10vh;
  filter: blur(1px);
  border: .1px solid rgb(255, 255, 255);
  border-radius: 50%;
font-family: 'monserat';
font-size: 2rem;
}

.posts{
  padding:5%;
  display: flex;
  gap:10%;
}
</style>
