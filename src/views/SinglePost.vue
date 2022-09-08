<template>
  <div id="body">
    <div v-if="!post">
      <loader />
    </div>

    <div v-if="post">
      <div v-for="item in post" :key="item.postID" class="post">
        <div class="reviewsbox">
          <h1>{{ item.title }}</h1>
          <div class="review">
            <p id="review">{{ item.review }}</p>
            <img id="foodpic" width="200" :src="item.foodimage" alt="" />
          </div>
        </div>
      </div>

      <div class="comments">
        <div v-if="comments">
          <div v-for="comment in comments" :key="comment.id">
            <div class="fullcom">
              <div v-if="(commenter = true)">
                <div v-if="Commenter.type === 'admin'" class="buttons">
                  <button @click="deleteCom(comment.id)" name="" id="del">
                    ✗
                  </button>
                  <button id="edit">✎</button>
                </div>
              </div>

              <div class="commentbox">
                <p>{{ comment.comment }}</p>
              </div>
              <p class="comUsername">{{ comment.comUsername }}</p>
            </div>
          </div>
        </div>
        <div v-else>Leave the first Comment?</div>

        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Want to Comment?"
            id="com"
            v-model="comment"
          ></textarea>
          <button @click="SendComment" class="btn btn-info">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import loader from "@/components/loader.vue";
export default {
  data() {
    return {
      comment: "",
    };
  },
  components: {
    loader,
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
    SendComment() {
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

    deleteCom(id) {
      console.log(id);
        this.$store.dispatch("DeleteComment", id);
      setTimeout(() => {
        this.$router.go();
      }, 2000);
    },
  },
};
</script>
<style scoped>
#body {
  color: black;
  font-weight: 700;
  background-color: #d15a0b;
  background-image: url("https://www.transparenttextures.com/patterns/brick-wall.png");
  top: 0;
  width: 100vw;
}
h1 {
  margin: 5% 0 2% 5%;
  /* font-weight:600; */
}
#review {
  text-align: justify;
  word-wrap: wrap;
  background: var(--off-white);
}
#foodpic {
  margin-top: -10%;
  float: right;
}
.review {
  margin: auto;
  width: 80vw;
  position: relative;
  background: var(--off-white);
  border: 3px solid black;
  border-radius: 10px;
  color: black;
  box-shadow: var(--float);
  padding: 2% 2% 1% 1%;
  font-weight: 900;
  line-height: 2rem;
  word-spacing: 3px;
  min-height: 50vh;
}
.form-floating {
  display: flex;
  flex-direction: column;
}
.comments {
  margin: 7% auto;
  content: "comments";
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 5px;
}
.fullcom {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(255, 0, 0, 0.155);
  margin: 0 0 2% 0;
}
.commentbox {
  height: fit-content;
  min-width: 50vw;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border: 2px rgba(0, 0, 0, 0.319) solid;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.486);
  position: relative;
  font-weight: 100;
  color: var(--off-white);
  padding: 10px 10px 0px 10px;
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
#com {
  max-width: 30vw;
  width: 100%;
  border: 1px solid black;
  background: rgba(0, 0, 0, 0.286);
  margin: 0 auto 0;
  color: var(--off-white);
}
.comUsername {
  margin: 10px 0 0 20px;
  color: wheat;
}
.buttons {
  display: flex;
  margin-left: -1.5%;
  flex-direction: column;
  justify-content: space-around;
}
#del,
#edit {
  font-weight: 800;
  height: 20px;
  background: none;
  border: none;
}
#del:hover,
#edit:hover {
  color: rgb(42, 41, 41);
  transform: scale(1.4);
}
#del:active,
#edit:active {
  transform: scale(0.9);
}
button {
  background: rgb(42, 42, 42);
  color: var(--off-white);
  border-radius: 10px;
  margin: 1% auto 0;
  font-size: 1rem;
  width: fit-content;
  padding: 5px;
}
button:hover {
  background: var(--off-white);
  color: var(--nav-color);
  font-weight: 600;
}
</style>
