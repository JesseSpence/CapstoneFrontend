<template>
    <div class="outer"> 
      <div class="Carousel">
    <slot></slot>
      </div>
      <button @click="nex" class="nex"><i class="fa-solid fa-caret-right"></i></button>
    
    <button @click="prev" class="prev"><i class="fa-solid fa-caret-left"></i></button>
    </div>
    </template>
    
    <script>
    
    export default {
        data() {
    
        },
        methods: {
            nex() {
            this.$emit('nex')
            },
         prev() {
            this.$emit('prev')
        }
    }
    }
    
    </script>
    
    <style scoped>
        .outer{
            position:relative;
        }
    button {
  background: rgb(42, 42, 42);
  color: var(--off-white);
  border-radius: 10px;
  margin: 1% auto 0;
  font-size: 1rem;
  padding: 5px;
}
.prev{
    position:absolute;
    left:25vw;
    top:40%;
}
.nex{
    position:absolute;
    right:25vw;
    top:40%;
}

@media screen and (max-width:500px) {
    .prev{
    left:10vw;
}
.nex{
    right:10vw;
}
}
    </style>