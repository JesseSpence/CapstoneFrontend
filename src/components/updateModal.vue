<template>
  <i id="settings" @click="toggleModal" >✎</i>
  <div v-if="active" id="modal">
<button @click="toggleModal">✗</button>
  </div>
</template>

<script>
export default {
  data() {
			return {
				active: false,
			};
		},

  methods: {
    toggleModal() {
      this.active = !this.active;
  }
}
}
</script>

<style scoped>
#modal{
  z-index: 10000;
height:70vh;
width:50vw;
background: rgba(2, 2, 2, 0.721);
position: fixed;
top:50%;
left:50%;
transform: translate(-50%, -50%);
}
i{
  z-index: 10000;
  position: absolute;
    right:-1vw;
    top:-2vw;
    filter: drop-shadow(1px 0px 10px  black);
    font-size: 3rem;
  }
  i:hover{
    transform: scale(1.1);
  }
  i:active{
    transform: scale(0.9);
  }

</style>