<template>
  <div v-if="verification">
    <h2>Welcome</h2>
    <button @click="Verify">your account</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      verification: false,
    };
  },
  methods: {
    Verify() {
      this.$store.dispatch("Verify", this.token);
    },
  },
};
</script>

<style scoped>
div {
  text-align: center;
  color: var(--off-white);
  border: 2px solid black;
  z-index: 10000;
  height: 70vh;
  width: 50vw;
  background: rgba(2, 2, 2, 0.721);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

button {
  background: rgb(42, 42, 42);
  color: var(--off-white);
  border-radius: 10px;
  margin: 1% auto 0;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}
</style>
