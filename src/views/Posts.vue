<template>
  <div v-if="posts">
    <div v-for="post in posts" :key="post.id" class="posts">
      <router-link
        :to="{ name: 'single blog post view', params: { id: post.id } }"
      >
        <h1>{{ post.title }}</h1>
      </router-link>
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

</style>
