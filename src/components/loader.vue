<template>

      <div class="loader">
        <i class="fas fa-utensils loader-icone"></i>
        <p>Loading</p>

        <div class="loader-ellipses">
          <span></span>

          <span></span>

          <span></span>
        </div>
      </div>
    
</template>

<script>
export default {

}
</script>

<style>
.loader {
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  left: 0;
  top: 0;
}

.loader p {
  color: white;
}

.loader-icone {
  font-size: 4em;
  margin-bottom: 50px;
  color: #e2b299;
  animation: rotate 2000ms infinite;
}

.loader-ellipses {
  display: flex;
  width: 100px;
  justify-content: space-between;
}

.loader-ellipses span {
  background-color: #dc8056;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  opacity: 0;
  animation: loader-grow 2000ms infinite alternate;
}

.loader-ellipses span:nth-child(2) {
  animation-delay: 400ms;
}

.loader-ellipses span:nth-child(3) {
  animation-delay: 800ms;
}

@keyframes loader-grow {
  to {
    transform: scale(1.2);
    background-color: #ff798f;
    opacity: 100%;
  }
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>