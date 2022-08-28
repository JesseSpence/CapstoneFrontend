<template>
    <div v-if="post">
        <div v-for="item in post" :key="item.postID" class="post" >
          <h1>{{item.title}}</h1>
          <div class="box">

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
        Commenter(){
              return this.$store.state.user;
        }
    },
    methods:{
        changeJ(){
             JSON.parse(this.topic.topic_answers)
        },
        Send(){
            this.$store.dispatch("AddComment",{
                userID: this.Commenter.userID,
                postID:this.$route.params.id,
                comment:this.comment,
                comUsername:this.Commenter.username
            })
        }
    }
    
}
</script>
<style >
    label{
        margin-right: 10px;
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