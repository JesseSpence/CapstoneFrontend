<template>
  <video loop playsinline muted autoplay>
    <source src="../assets/landing-vids.mp4" />
  </video>
  <div class="overlay"></div>
  <div class="landing">
    <div class="landingbox">
      <h1>OUR VIEWS ON FOODS</h1>
    </div>
    <div class="Slider">
	<carousel
	@nex="nex"
	@prev="prev"
	>
	<carousel-slide v-for="(slide,index) in slides" :key="slide" :index="index" :visibleSlide="visibleSlide"> 


		<div class="homebox container d-flex flex-column">
      <div class="circlecontainer">
		<img class="py-2 homepic" :src="slide.img"/>

      </div>
    </div>
	</carousel-slide>
	</carousel>
</div>

    <h1>MELLOWS REVIEWS</h1>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import CarouselSlide from "@/components/CarouselSlide.vue";

export default {
  name: "HomeView",

  components: {
		Carousel ,
			CarouselSlide
		},

    data() {
			return {
				slides: [
					{ 'img': 'https://i.ibb.co/Y25WW8s/giphy-5.gif',
					},
					{
						'img': 'https://i.ibb.co/19FL5Ch/giphy-2.gif',
						
					    },
					{
						'img': 'https://i.ibb.co/6RqsgN5/giphy-7.gif',
						
						
					},
					{
						'img': 'https://i.ibb.co/ZBmhvMH/giphy-4.gif',
					    
						
					},
					{
						'img': 'https://i.ibb.co/8smVT02/giphy-8.gif',
					    
						
					},
					{ 'img': 'https://i.ibb.co/8jmCs88/giphy-9.gif',
					   

					}
				],
				visibleSlide : 0,
			}
		},

    computed: {
		slideslen(){
				return this.slides.length;
			}
		},
		methods: {
			nex() {
				if(this.visibleSlide >= this.slideslen - 1) {
					this.visibleSlide = 0;
				}else {
					this.visibleSlide++;
				}
			},
			prev() {
				if (this.visibleSlide <= 0) {
					this.visibleSlide = this.slideslen - 1
				} else {
					this.visibleSlide--;
				}
			}

	},
}
</script>

<style scoped>
video {
  min-width: 100vw;
  max-width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
}
.overlay {
  min-width: 100vw;
  max-width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.741);
  z-index: -1;
}
.landing {
  margin: -2% auto;
  min-height: 100vh;
  padding: 0% 0 0 0;
}
.landingbox,
h1 {
  z-index: 100;
  margin: 10% auto;
  font-weight: 900;
  width: fit-content;
}

.homebox {
  z-index: 1;
  height: fit-content;
  width: fit-content;
  margin: -5% auto -5%;
}

.homepic {
  filter: drop-shadow(0px 10px 3px black);
  position: absolute;
  width: 200px;
  border-radius: 70%;
  height:100%;
}
.circlecontainer {
  display: flex;
  justify-content: center;
  position: relative;
  height: 215px;
  width: 215px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.755);
  animation: shadow linear infinite 2s;
  box-shadow: 1px 1px 8px 8px grey;
}
@keyframes shadow {
  0% {
    box-shadow: 1px 1px 8px 8px grey;
  }
  50% {
    box-shadow: 1px 1px 25px 10px black;
  }
}
</style>
