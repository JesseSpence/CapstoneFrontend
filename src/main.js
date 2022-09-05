import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import { getCurrentInstance } from "vue";

// const Swal = require('sweetalert2')
createApp(App).use(store).use(router).mount('#app')

const options = {
    confirmButtonColor: '#000',
    cancelButtonColor: '#fff',
  };
  
//   App.use(VueSweetalert2, option 
