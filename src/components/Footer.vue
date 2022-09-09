<template>
  <div class="body">
    <div class="row">

      <div class="col-lg-3 text-center pe-2" >
        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker "><span class="ms-2 contact-text">Capetown, South Africa</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone "><span class="ms-2 contact-text"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope "><span class="ms-2 contact-text"><a href="jesse.2601@icloud.com" title="Send me an email">hitmeup@gmail.com</a></span></i></li>
          
        </ul>
      </div>

      <div class="col-lg-6">
    <div class="text text-center">
      <h2>MELLOW REVIEWS</h2>
      <p>copy right <i class="fa-regular fa-copyright"></i></p>
      <p>designed and build by</p>
      <h5>꧁ Jesse Spence ꧂</h5>
    </div>
  </div>

  <div class="col-lg-3">
    <ul class="social-media-list">
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>       
        </ul>
</div>

  </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
.body {
  width: 100vw;
  height: fit-content;
  color: var(--off-white);
  padding: 1% 1.8% 1% 1%;
  background: var(--nav-color) !important;
  z-index: 1;
}
.text {
  margin: 3% auto;
}
.contact-list {
  padding:0;
    list-style-type: none;
}
.list-item {
  line-height: 4;
  font-weight: 100;
}
a{
  color: var(--off-white);
}
.contact-text{  font-family: "Montserrat", sans-serif;}

/* Social Media Icons */
.social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 18% auto;
  padding: 0;
}

.social-media-list li a {
  color: var(--off-white);
}

.social-media-list li {
  position: relative; 
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 5% 3%;
  line-height: 60px;
  border-radius: 50%;
  color: var(--off-white);
  background-color: rgb(27,27,27);
  cursor: pointer; 
  transition: all .2s ease-in-out;
}

.social-media-list li:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px var(--off-white);
  transition: all .2s ease-in-out;
}

.social-media-list li:hover {
  background-color: var(--off-white); 
}

.social-media-list li:hover:after {
  opacity: 1;  
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
}

.social-media-list li:hover a {
  color: var(--nav-color);
}
</style>
