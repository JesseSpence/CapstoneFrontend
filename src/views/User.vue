<template >
    <div v-if="user">
        <h1>{{user.Username}}</h1>
    </div>
    <button @click="UserChecker">Look</button>
</template>
<script>
export default {
    computed:{
        user(){
            return this.$store.state.user
        }
    },
    methods:{
        UserChecker(){
            console.log(this.user);
        }
    }

}
</script>
<style lang="">
    
</style>