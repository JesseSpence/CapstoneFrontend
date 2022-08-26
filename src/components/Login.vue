<template >
    <div>

        <form @submit.prevent="Login">
            <div class="input-group">
  <span class="input-group-text">Email and Password</span>
  <input type="email" aria-label="Email" class="form-control" v-model="email" required>
  <input type="password" aria-label="Password" class="form-control" v-model="password" required>
</div>
  {{email}}
  {{password}}

<button type="submit">Login</button>
<div v-if="token">
    <button @click="Verify">Browse</button>
</div>
        </form>
        
    </div>
</template>
<script>
export default {
   computed:{
      token(){
        return  this.$store.state.token
      }
    },
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
        Login(){
            this.$store.dispatch("Login",{
                email:this.email,
                password:this.password
            })
        },
        Verify(){
            this.$store.dispatch("Verify",this.token)
        }
    }
}
</script>
<style lang="">
    
</style>