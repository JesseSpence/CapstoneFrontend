<!-- <template>
    <div v-if="posts">
        
      <div v-for= "post in posts" :key="post.id"  class="post">
        <router-link
        :to="{ name: 'single blog post view', path: '/Post/:id', params: { id: post.id } }"
      >
    <div class="body">
  <div class="card" data-tilt data-tilt-scale="0.95" data-tilt-startY="40">
  
    
        <h3>{{ post.title }}</h3>
        <div class="foodpic">
          <img width="200" :src="post.logo" alt="">
        </div>
<div class="postdeets">
  <h5>{{post.rating}}/10</h5>
  <p>{{post.restaurant}}</p>

</div>
        </div>
        
      

</div>

</router-link>
</div>
</div>
</template>

<script>
export default {

    mounted() {
    this.$store.dispatch("ShowPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Sacramento&display=swap');

:root {
--cursive : ;
--handwriting : ;
--white : #000 ;
--black : #fff ;
font-size: 5vmin;
}


.body {
  display: grid;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: 'Sacramento', cursive;
  color: #000;
  background: #333;
  background-image: radial-gradient(ellipse at bottom left, #00a3cb 40%, rgba(0, 163, 203, 0) 40%), radial-gradient(ellipse at top right, #00a3cb 30%, rgba(0, 163, 203, 0) 30%), linear-gradient(to right, #625793 0%, #625793 33%, #d55d64 33%, #d55d64 66%, #e49129 66%);
  background-size: 50% 100%;
}
.body .message {
  position: absolute;
  right: 0.5vw;
  top: 1vw;
  max-width: 60vw;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
}
.body .message a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid #444;
}
.body .message a:hover {
  border-width: 3px;
}
.body .card {
  margin: auto;
  width:40vw;
  padding: 2em;
  border-radius: 1em;
  border: 1px solid rgba(0, 0, 0, 0.5);
  text-shadow: 0 0 1em rgba(255, 255, 255, 0.5);
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  transform: perspective(500px);
  transform-style: preserve-3d;
}
.body .card .welcome {
  font-family: 'Sacramento', cursive;
  transform: translateZ(20px);
}
.body .card .year {
  font-family: 'Great Vibes', cursive;
  font-size: 2.5em;
}
.body .card .year span {
  display: block;
  transform: translateZ(40px);
}
.body .card .year span:nth-child(2) {
  padding-left: 1em;
  transform: translateZ(60px);
}
.body .card .year span:nth-child(3) {
  padding-left: 2em;
  transform: translateZ(80px);
}

</style> -->