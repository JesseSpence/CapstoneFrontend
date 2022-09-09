<template>
  <div id="body">
    <h1>Our Food Reviews</h1>
    <input
      type="text"
      v-model="search"
      id="searchbar"
      placeholder="something in mind?"
    />
    <div v-if="!posts">
      <loader />
    </div>

    <div v-if="posts" class="posts">
      <div v-for="(post, index) in posts" :key="post">
          <router-link
            :to="{ name: 'single blog post view', params: { id: post.id } }"
          >
        <div class="post">
            <div class="top">
              <h3>{{ post.title }}</h3>
              <img width="45" height="50" :src="post.logo" alt="" />
            </div>
          
          <div class="foodpic">
            <img width="200" :src="post.foodimage" alt="" />
          </div>
          <div class="postdeets">
            <h5>
              rating : <span>{{ post.rating }}/10</span>
            </h5>

            <p>{{ post.restaurant }}</p>
            <div class="date">
              <div>post no : {{ post.id }}</div>
              <p>created on : {{ post.createDate }}</p>
            </div>
          </div>
          
          <!-- <i id="dislike" class="away" @click="dislikePost(post)">RR</i> -->
        </div>
</router-link>
<i
            :id="'likebtn' + index"
            class="there"
            @click="likePost(index, post)"
            ><i class="fa-solid fa-heart"></i></i
          >
      </div>
    </div>
  </div>
</template>
<script>
import loader from "@/components/loader.vue";
export default {
  props: ["id", "post"],
  data() {
    return {
      search: "",
    };
  },
  components: {
    loader,
  },
  mounted() {
    this.$store.dispatch("ShowPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts?.filter((post) => {
        let isMatch = true;
        if (!post.title.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        // if (this.category !== "all" && product.category !== this.category) isMatch = false;
        // if (this.company !== "all" && product.company !== this.company) isMatch = false;
        return isMatch;
      });
    },
  },
  methods: {
    likePost(index, post) {
      let id = "likebtn" + index;
      const likebtn = document.getElementById(id);
      console.log(post);
      if (likebtn.classList == "there") {
        console.log("liked a post");
        this.$store.commit("updateLikedposts", post);
        likebtn.classList.toggle("away");
      } else {
        likebtn.classList.remove("away");
        console.log("dislikepost");
        this.$store.dispatch("deleteFromLikedposts", post);
      }
    },
  },
};
</script>

<style scoped>
.there {
  color: grey;
}
.away {
  color: orange;
}
#searchbar {
  margin: 2% auto;
  padding: 5px;
  background: rgba(0, 0, 0, 0.486);
  border-radius: 10px;
  box-shadow: var(--float);
  border: 2px solid black;
  color: var(--off-white);
  width: fit-content;
}
a {
  text-decoration: none;
}

#body {
  display: flex;
  flex-direction: column;
  background-color: #e07b37;
  background-image: url("https://www.transparenttextures.com/patterns/brick-wall-dark.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  /* background-repeat: no-repeat;
  background-position: cover; */
  padding: 1% 0 5% 0;
  z-index: 5;
  min-height: 100vw !important;
}

.top {
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.post {
  background: var(--nav-color);
  border: 3px solid black;
  border-radius: 10px;
  color: var(--off-white);
  box-shadow: var(--float);
  display: flex;
  padding: 2% 2% 1% 1%;
  margin: 5% 0 10% 0;
  text-align: center;
  flex-direction: column;
  z-index: 10;
  width: 295px;
}

.foodpic {
  display: flex;
  width: 156px;
  background: rgba(143, 139, 139, 0.041);
  box-shadow: var(float);
  height: 140px;
  overflow: clip;
  margin: 2% auto 2%;
  border-radius: 50%;
}

.postdeets {
  text-align: right;
  margin: 0 0 -5% 0;
}
span {
  color: var(--off-white);
  height: 10vh;
  font-size: 2rem;
}

.date {
  /* position: relative; */
  color: rgb(108, 102, 102);
  display: flex;
  justify-content: space-between;
}

.date > p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  width: 181.5px;
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

h5 {
  text-align: left;
}

.posts {
  padding: 3% 5%;
  display: flex;
  justify-content: space-around;
  gap: 10%;
  flex-wrap: wrap;
}
</style>
