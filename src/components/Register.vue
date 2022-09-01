<template >
    <div>
       <form @submit.prevent="Register">
       <div class="inputs" id="important">
        <input type="name" name="name" id="name" class="formcontrol" v-model="name" required>
           {{name}}
           <input type="surname" name="surname" id="surname" class="formcontrol" v-model="surname" required>
             {{surname}} 
           <input type="text" name="Username" id="Username" class="formcontrol" v-model="Username" required>
           {{Username}}
           <input type="email" name="email" id="email" class="formcontrol" v-model="email" required>
           {{email}}
             <input type="password" name="password" id="password" class="formcontrol" v-model="password" required>
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
    .formcontrol {
 border-radius:20px;
 background: rgba(48, 44, 44, 0.381);
  width: 180px;
  color: white;
  margin: 5% auto;
  padding: 2% 0 2% 5%;
}
</style>