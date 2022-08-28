<template >
    <div>
       <form @submit.prevent="Register">
       <div class="inputs" id="important">
        <input type="name" name="name" id="name" class="from-control" v-model="name" required>
           {{name}}
           <input type="surname" name="surname" id="surname" class="from-control" v-model="surname" required>
             {{surname}} 
           <input type="text" name="Username" id="Username" class="from-control" v-model="Username" required>
           {{Username}}
           <input type="email" name="email" id="email" class="from-control" v-model="email" required>
           {{email}}
             <input type="password" name="password" id="password" class="from-control" v-model="password" required>
             {{password}}       
       </div>
      
         <button type="submit">Register</button>

       </form> 
    </div>
</template>
<script>
export default {
    data(){
        return {
            name: "",
            surname:"",
            Username:"",
            email:"",
            password:""
        }
    },
    methods:{
        Register(){
            this.$store.dispatch("Register", {
                name: this.name,
                surname:this.surname,
                Username:this.Username,
                email:this.email,
                password:this.password,
                user_type:this.Yoh
            })
        }
    }
}
</script>

<style scoped="">
    
</style>