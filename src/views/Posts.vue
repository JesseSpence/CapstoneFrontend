<template>
<div id="body">
  <h1>Our Food Reviews</h1>
  <div v-if="posts" class="posts">
    <div v-for="post in posts" :key="post.id" >
      <router-link
        :to="{ name: 'single blog post view', params: { id: post.id } }"
      >
      <div class="post">
        <div class="top">
        <h3>{{ post.title }}</h3> 
        <img width="40" :src="post.logo" alt="">
      </div>
        <div class="foodpic">
          <img width="200" :src="post.foodimage" alt="">
        </div>
<div class="postdeets">
  <h5>rating : <span>{{post.rating}}/10</span></h5>
  <p>{{post.restaurant}}</p>
  <div class="date">
    <div >post no : {{post.id}}</div>
  <p >created on : {{post.createDate}}</p>
</div>

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
   background: rgb(243, 214, 194);
  background: linear-gradient(
    0deg,
    rgb(170, 66, 10) 0%,
    rgb(246, 197, 72)
  );
  background-repeat: no-repeat;
  background-position: cover;
  min-height: 100vw;
}

.top{
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.post{
  background:  var(--nav-color);
  border: 3px solid black;
  border-radius: 10px;
  color:var(--off-white);
  box-shadow: var(--float);
  display: flex;
  padding: 2% 2% 1% 1%;
  text-align: center;
  flex-direction: column;
  
  width: 295px;
}

.foodpic{
  display: flex;
  width:156px;
  background: rgba(143, 139, 139, 0.041);
  box-shadow: var(float);
  height:140px;
  overflow: clip;
  margin: 2% auto 2%;
  border-radius: 50%;
}

.postdeets{
  text-align: right;
  margin: 0 0 -5% 0;
}
span{
  color: var(--off-white);
  height: 10vh;
font-size: 2rem;
}

.date{
  /* position: relative; */
  color:rgb(108, 102, 102);
  display: flex; 
  justify-content: space-between;
}
.date > div {
  
}
.date > p {
  white-space: nowrap;
        overflow: hidden;
        text-overflow: clip;
        width:181.5px;
}
/* .date::after{
  content: "";
  height: 35px;
  width :110px;
  transform: rotateZ(-7deg);
position: absolute;
background: var(--nav-color);
left: 70.5%;
margin-top:-1%;
} */

h5{
  text-align: left;
}

.posts{
  padding:0 5%;
  display: flex;
  justify-content: space-around;
  gap:10%;
  flex-wrap: wrap;
}
</style>
