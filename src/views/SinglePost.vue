<template>
  <div v-if="post">
    <div v-for="item in post" :key="item.postID" class="post">
      <div class="reviewsbox">
        <h1>{{ item.title }}</h1>
        <div class="review">
          <p>{{ item.review }}</p>
        </div>
      </div>
    </div>
    <div class="comments">
      <div v-if="comments">
        <div v-for="comment in comments" :key="comment.comment_id">
          <div class="fullcom">
            <div class="commentbox">
              <h5>{{ comment.comment }}</h5>
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
    changeJ() {
      JSON.parse(this.topic.topic_answers);
    },
    Send() {
    //   console.log(this.$store.state.user);
        this.$store.dispatch("AddComment", {
          userID: this.$store.state.user.id,
          blogpostID: this.$route.params.id,
          comment: this.comment,
            comUsername: this.Commenter.username,
        });
        setTimeout(() => {
            this.$router.go()
        }, 1000);
        
    },
  },
};
</script>
<style>
body {
  background: rgb(24, 9, 1);
  background: linear-gradient(
    0deg,
    rgb(170, 66, 10) 0%,
    rgb(255, 202, 138) 100%
  );
  background-repeat: no-repeat;
  height: 100vh;
}
.review {
  border: 1px solid rgba(0, 0, 0, 0.314);
  margin: auto;
  padding: 4%;
  width: 80vw;
  min-height: 50vh;
}
.comments {
  content: "comments";
  padding: 5px 0 5px 100px;
}
.fullcom {
  display: flex;
  margin: 0 0 1% 0;
}
.commentbox {
  height: fit-content;
  width: fit-content;
  border: 1px rgba(0, 0, 0, 0.319) solid;
  border-radius: 10px;
  position: relative;
  padding: 5px 10px 5px 10px;
  word-break: break-all;
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
}
.comUsername {
  margin: 10px 0 0 25px;
}
</style>
