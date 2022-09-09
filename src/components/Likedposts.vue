<template>
  <body>
    
      <div id="box">
        <div class="content">
          <div class="card" v-for="post in Likedposts" :key="post.id">
            <img :src="post.logo" class="mb-2" alt="food" />
            <div class="cart-content">
              <h3 class="ms-5">{{ post.title}}</h3>
             
             
              
              <button @click="deleteFromCart(product.id)" class="button-17">
                <i class="fa fa-trash"></i>
                <span class="btn2"></span>
              </button>
              <div class="right-bar">
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
  </body>
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
      return this.$store.state.Likedposts
    },
    product() {
      return this.$store.state.product;
    },
  },
};
</script>