<template>
<div id="body">
  <div v-if="post">
    <div v-for="item in post" :key="item.postID" class="post">
      <div class="reviewsbox">
        <h1>{{ item.title }}</h1>
        <div class="review">
          <p id="review">{{ item.review }}</p>
          <img id="foodpic" width="200" :src="item.foodimage" alt="">
        </div>
      </div>
    </div>
    <div class="comments">
      <div v-if="comments">
        <div v-for="comment in comments" :key="comment.comment_id">
          <div class="fullcom">
            <div class="buttons">
            <button name="" id="del">✗</button>
            <button id="edit">✎</button>
          </div>
            <div class="commentbox">
              <p>{{ comment.comment }}</p>
            </div>
            <p class="comUsername">{{ comment.comUsername }}</p>
          </div>
        </div>
      </div>
      <div v-else>Be the First to Comments to this topic</div>

      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="float"
          v-model="comment"
        ></textarea>
        <label for="floatingTextarea">Comments</label>
      </div>
      <button @click="Send" class="btn btn-info">Send</button>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comment: "",
    };
  },
  mounted() {
    this.$store.dispatch("GetPost", this.$route.params.id),
      this.$store.dispatch("ShowComment", this.$route.params.id);
  },
  computed: {
    post() {
      return this.$store.state.post;
    },
    comments() {
      return this.$store.state.comments;
    },
    Commenter() {
      return this.$store.state.user;
    },
  },
  methods: {
    
    Send() {
      //   console.log(this.$store.state.user);
      this.$store.dispatch("AddComment", {
        userID: this.$store.state.user.id,
        blogpostID: this.$route.params.id,
        comment: this.comment,
        comUsername: this.Commenter.username,
      });
      setTimeout(() => {
        this.$router.go();
      }, 1000);
    },
  },
};
</script>
<style scoped>
#body {
  color: black;
  font-weight: 700;
  background: rgb(40, 2, 2);
  background: linear-gradient(
    0deg,
    rgb(153, 0, 0) 0%,
    rgb(245, 85, 85) 100%
  );
  position: absolute;
  top:0;
  width:100vw;
  background-repeat: no-repeat;
  background-position: cover;
}
h1{
  margin: 5% 0 2% 5%;
  /* font-weight:600; */
}
#review{
  background: var(--off-white);
}
#foodpic{
  position: absolute;
  right:5%;
  top:30%;
}
.review {
  margin: auto;
  width: 80vw;
  background:  var(--off-white);
  border: 3px solid black;
  border-radius: 10px;
  color:black;
  box-shadow: var(--float);
  padding: 2% 2% 1% 1%;
 font-weight: 900;
  line-height: 2rem;
  word-spacing:3px;
  min-height: 50vh;
}
.comments {
  margin: 7% auto;
  content: "comments";
  width: 80vw;
  padding: 5px 0 5px 100px;
}
.fullcom {
  display: flex;
  margin: 0 0 1% 0;
}
.commentbox {
  height: fit-content;
  width: fit-content;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border: 2px rgba(0, 0, 0, 0.319) solid;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.486);
  position: relative;
  font-weight: 100;
  color: var(--off-white);
  padding: 10px 10px 0px 10px;
  word-break:break-all;
}
.commentbox::after {
  height: 1px;
  width: 15px;
  background: rgba(0, 0, 0, 0.363);
  content: "";
  position: absolute;
  right: -20px;
  top: 20px;
}
#float {
  max-width: 30vw;
  width: 100%;
  border: 1px solid black;
  background: rgba(0, 0, 0, 0.286);
  margin: 0 auto 5%;
  color: var(--off-white);
}
.comUsername {
  margin: 10px 0 0 20px;
  color:wheat;
}
.buttons{
  display:flex;
  margin-left:-1.5%;
  flex-direction: column;
  justify-content: space-around;
}
#del, #edit{
  font-weight: 800;
  height:20px;
  background: none;
  border :none;
}
#del:hover, #edit:hover{
  color: rgb(42, 41, 41);
  transform: scale(1.4);
}
#del:active, #edit:active{
  transform: scale(0.9);
}
</style>
