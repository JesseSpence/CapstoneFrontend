<template>
    <div>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Topic
</button>



        <h1>Topics</h1>
        <table v-for="topic in topics" :key="topic.topic_id" >
        <tr>
        <th>#</th>
        <th>Topics</th>
        </tr>
        <tr>
        <td>{{topic.topic_id}}</td>
        <td>{{topic.Topic}}</td>
        </tr>
        </table>
        <H1>Users</H1>

        <div v-if="Lords">
       <table v-for="user in Lords" :key="user.user_id" >
       <tr>
        <th>#</th>
        <th>UserName</th>
       </tr>
       <tr>
        <td>{{user.user_id}}</td>
        <td>{{user.Username}}</td>
       </tr>
       </table>
         </div>
         <button @click="Look">Users</button>
        
    </div>
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <form @submit.prevent="AddTopic">
       <label for="#topic" class="label text-decoration-underline">Topic Of The Day</label>
       <div>
        <textarea name="Topic" id="topic" cols="30" rows="5" v-model="Topic"></textarea>
        {{Topic}}
       </div>
         <button class="btn btn-success">Add</button>
       </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    mounted(){
        this.$store.dispatch("ShowTopics"),
        this.$store.dispatch("ShowUsers")
    },
    computed:{
      
        topics() {
            return this.$store.state.topics
        },
        users() {
              return this.$store.state.users
        }
    },
    data(){
        return{
            Topic:"",
        }
    },
    methods:{
        AddTopic(){
            this.$store.dispatch("AddTopic",{
                Topic:this.Topic
            })
        },
        Look(){
             console.log(users);
        }
    }
    
}
</script>
<style>
    
</style>