<template>
  <div class="body">
    <div class="about">
      <h1>This is a contact page</h1>
      <div class="contactbox">
        <div class="side">

          <img
            class="img-fluid"
            src="https://i.ibb.co/h89Wr7N/pexels-jonathan-borba-2878710.jpg"
            alt=""
          />

        </div>
        <div class="contact">
          <h2>contact us</h2>
          <div class="icons">
            <div class="col text-center">
              <p @click="copyNum" id="p">📞</p>
              <h5 ref="mynumber">+27 21 705 1456</h5>
            </div>
            <div class="col text-center">
              <p @click="copyEmail" id="p">📧</p>
              <h5 ref="myemail">jesse.2601@icloud.com</h5>
            </div>
            <div class="col text-center">
              <p @click="copy" id="p">🌍</p>
              <h5>Cape Town, South Africa</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  methods: {
    copyNum() {
      var Contact = this.$refs.mynumber;
      navigator.clipboard.writeText(Contact.innerHTML);
      // Contact.select();
      // document.execCommand("copy");
      console.log(Contact.innerHTML);
    },
    copyEmail() {
      var Contact = this.$refs.myemail;
      navigator.clipboard.writeText(Contact.innerHTML);
      // Contact.select();
      // document.execCommand("copy");
      console.log(Contact.innerHTML);
    },
  },
};
</script>
<style scoped>
.img-fluid {
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow-x: hidden;
}

.body {
  padding: 1%;
  background: rgb(40, 36, 2);
  background: linear-gradient(
    0deg,
    rgb(180, 165, 0) 0%,
    rgb(254, 254, 106) 100%
  );
  width: 100vw;
  background-repeat: no-repeat;
  background-position: cover;
  min-height: fit-content;
}
h1 {
  margin: 1.5% 0 0 3%;
}

h2 {
  font-weight: 500;
}
h5 {
  margin: -5% 0 0 0;
  font-size: 1.2rem;
}

#p {
  font-size: 4rem;
}
#p:hover {
  transform: scale(1.05);
}
#p:active {
  transform: scale(0.95);
}
.about {
  height: 100vh;
}
.contact {
  width: 57vw;
  padding: 2%;
}
.icons {
  display: flex;
  justify-content: space-evenly;
}
.contactbox {
  transform: scale(0.8);
  width: 75vw;
  height: 80vh;
  border: 3px solid black;
  display: flex;
  background: rgba(0, 0, 0, 0.69);
  color: var(--off-white);
  margin: 3% auto;
}

.side {
  width: 18vw;
  border: 1px solid black;
  height: 79.2vh;
  overflow: hidden;
  position: relative;
}
.side::after {
  content: "";
  position: absolute;
  width: 18vw;
  height: 80vh;
  z-index: 1000;
  filter: blur(2px);
  background: rgba(0, 0, 0, 0.953);
}
</style>
