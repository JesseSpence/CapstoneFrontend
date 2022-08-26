<template>
    <div v-if="post">
        <div v-for="item in post" :key="item.postID" class="topic" >
          <h1>{{item.title}}</h1>
          <div class="box">
              <div class="for">
                  <label for="for" >For topic</label>
                  <input type="checkbox" name="for" id="for" v-model="right">
                  {{right}}
                  </div>
         <div class="for">
                  <label for="for" >Against topic</label>
                  <input type="checkbox" name="for" id="for" v-model="left">
                  {{left}}
                  </div>
            </div>
          </div>
        <div class="comments">
            Comments
            <div v-if="comments">
            <div v-for="comment in comments" :key="comment.comment_id">
            <p>{{comment.comment}}</p>
            </div>
            </div>
            <div v-else>
                Be the First to Comments to this topic
            </div>

            <div class="form-floating">
              <textarea class="form-control" placeholder="Leave a comment here" id="float" v-model="comment"></textarea>
             <label for="floatingTextarea">Comments</label>
            </div>
            <button @click="Send" class="btn btn-info">Send</button>
        </div>
        
    </div>
</template>
<script>
export default {

    data(){
       return{
        right:false,
        left:false,
        comment:""
        
       }
    },
    props:["id"],
    mounted(){
        this.$store.dispatch("GetPost",this.$route.params.id),
        this.$store.dispatch("ShowComment",this.$route.params.id)
  
    },
    computed:{
        post(){
            return this.$store.state.post;
        }, 
         comments(){
            return this.$store.state.comments;
        },
        Debater(){
              return this.$store.state.user;
        }
    },
    methods:{
        changeJ(){
             JSON.parse(this.topic.topic_answers)
        },
        Send(){
            this.$store.dispatch("AddComment",{
                comment:this.comment,
                userID:this.Debater.user_id,
                postID:this.$route.params.id
            })
        }
    }
    
}
</script>
<style >
    label{
        margin-right: 10px;
    }

    .for{
        border:1px solid black;
        padding: 10px;
        width: fit-content;
    } 
    .box{
        margin: auto; 
        display: flex;
        justify-content: space-between;
        width: 40vw;
    }
    .comments{
    content:"comments"
    }
    #float{
        margin: auto;
        max-width:30vw;
        width: 100%;
    }
</style>