<template>
  <div class="body">
    <div class="about">
      <h1>Have Questions or Advice?</h1>
      <div class="contactbox">
        <div class="side">
          <img
            class="img-fluid"
            src="https://i.ibb.co/h89Wr7N/pexels-jonathan-borba-2878710.jpg"
            alt=""
          />
        </div>
        <div class="contact">
          <h2>contact us :</h2>
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

          <form action="https://formspree.io/f/xdojagpd" method="POST">
            <label>
              Your email:
              <input type="email" name="email" />
            </label>
            <label>
              Your message:
              <textarea name="message"></textarea>
            </label>
            <!-- your other form fields go here -->
            <button type="submit">Send</button>
          </form>
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
form {
  display: flex;
  height: 40vh;
  font-size: 1.5rem;
  flex-direction: column;
  align-items: center;
}
label {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% auto;
}
.body {
  padding: 1%;
  background-color: #d15a0b;
  background-image: url("https://www.transparenttextures.com/patterns/brick-wall-dark.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  width: 100vw;
  /* background-repeat: no-repeat;
  background-position: cover; */
  min-height: fit-content;
}
h1 {
  margin: 1.5% 0 0 3%;
}

h2 {
  font-size: 2.5rem;
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
  height: fit-content;
}
.contact {
  width: 56vw;
  padding: 2% 2% 4% 2%;
  margin: auto;
}
.icons {
  display: flex;
  margin: 5% 0 5% 0;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.contactbox {
  transform: scale(0.8);
  width: 75vw;
  flex-wrap: wrap;
  height: fit fit-content;
  border: 3px solid black;
  display: flex;
  background: rgba(0, 0, 0, 0.69);
  color: var(--off-white);
  margin: 3% auto;
}

.side {
  width: 18vw;
  border: 1px solid black;
  height: 85.2vh;
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
button {
  background: rgb(42, 42, 42);
  color: var(--off-white);
  border-radius: 10px;
  margin: 1% 0 0 0;
  font-size: 1rem;
  padding: 5px;
}
@media screen and (max-width: 820px) {
  .side {
    width: 75vw;
    height: 20vh;
  }
}
@media screen and (max-width: 420px) {
  input,
  textarea {
    width: 80%;
  }
}
</style>
