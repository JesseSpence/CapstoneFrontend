<template>
  <div id="likebox">
    <h2>Reviews I like</h2>
    <div class="likecard" v-for="post in Likedposts" :key="post.id">
      <img width="100" :src="post.logo" class="mb-2" alt="food" />
      <div class="cart-content">
        <h3>{{ post.title }}</h3>

        <i id="deletebtn" @click="deleteFromLikedposts(post.id)">🧡</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: "",
    };
  },
  methods: {
    deleteFromLikedposts(id) {
      return this.$store.dispatch("deleteFromLikedposts", id);
    },
  },
  computed: {
    // calculatePrice() {
    //   // console.log($store.state.currentValue)
    //   return this.$store.state.cart.reduce((accumulator, currentValue) => {
    //     return accumulator + parseInt(currentValue.price);
    //   }, 0);
    // },
    Likedposts() {
      return this.$store.state.Likedposts;
    },
    product() {
      return this.$store.state.product;
    },
  },
};
</script>

<style scoped>
#likebox {
  text-align: center;
  padding: 2%;
}
.likecard {
  width: 40%;
  margin: 1% auto;
  background: rgba(128, 128, 128, 0.605);
  border: 5px solid black;
  color: var(--nav-color);
}
h2 {
  font-weight: 600;
}
#deletebtn {
  font-size: 2rem;
}
</style>
