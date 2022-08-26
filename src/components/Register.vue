<template >
    <div>
       <form @submit.prevent="Register">
       <div class="inputs" id="important">
           <input type="text" name="Username" id="Username" class="from-control" v-model="Username" required>
           {{Username}}
           <input type="email" name="email" id="email" class="from-control" v-model="email" required>
           {{email}}
           <input type="password" name="password" id="password" class="from-control" v-model="password" required>
             {{password}}       
       </div>
       <select name="Yoh" id="Yoh"  v-model="Yoh">
       <option value="user">debater</option>
       </select>
         <button type="submit">Register</button>
       </form> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            Username:"",
            email:"",
            password:"",
            Yoh:""
        }
    },
    methods:{
        Register(){
            this.$store.dispatch("Register",{
                Username:this.Username,
                email:this.email,
                password:this.password,
                user_type:this.Yoh
            })
        }
    }
}
</script>
<style lang="">
    
</style>