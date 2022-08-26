import router from '@/router'
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    users:null,
    user:null,
    token:null,
    posts:null,
    post:null,
    comments:null
  },
  getters: {
  },
  mutations: {
    SetUsers(state,users){
      state.user = users
     },
    SetUser(state,user){
     state.user = user
    },
    SetToken(state,token){
      state.token = token
     },
     SetPosts(state,posts){
      state.posts = posts
     },
     SetPost(state,post){
      state.post = post
     },
     SetComments(state,comments){
      state.comments = comments
     }
  },
  actions: {   
     ShowUsers:async (context)=>{
    const res = await fetch("https://jessesfoodblog.herokuapp.com/users",{
      method:"GET",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const UsersArray = await res.json();
    console.log(UsersArray);
    context.commit("SetUsers",UsersArray);
  },
    Login: async (context,payload)=>{
      const res = await fetch("https://jessesfoodblog.herokuapp.com/users/login",{
        method:"POST",
        body:JSON.stringify({
          email:payload.email,
          password:payload.password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(res => res.json())
      .then(tokendata=>{
        console.log(tokendata);
        console.log(tokendata.token);
  
       context.commit("SetToken",tokendata.token)
      })

    },
    Register: async (context,payload)=>{
      const res = await fetch("https://jessesfoodblog.herokuapp.com/users/register",{
        method:"POST",
        body:JSON.stringify({
          Username:payload.Username,
          email:payload.email,
          password:payload.password,
          user_type:payload.user_type
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(res => res.json())
      .then(newUserdata=>{
        console.log(newUserdata);
      })
    },
    Verify:async (context,token)=>{
      const res = await fetch("https://jessesfoodblog.herokuapp.com/users/verify",{
        method:"GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-auth-token':`${token}`
        },
      })
      .then(res => res.json())
      .then(userDetails =>{
        console.log(userDetails.user);
       context.commit("SetUser",userDetails.user)
      } )
   
      router.push({
        name:"Posts"
      })
    },
    AddPost:async (context,Land)=>{
        console.log(Land);
      const res = await fetch("https://jessesfoodblog.herokuapp.com/blogposts",{
        method:"POST",
        body:JSON.stringify({
        Post:Land.Post
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }) 
      const added_post = res.json();
      console.log(added_post);
    },
    ShowPosts:async (context)=>{
      const res = await fetch("https://jessesfoodblog.herokuapp.com/blogposts",{
        method:"GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const postsArray = await res.json();
      console.log(postsArray);
      context.commit("SetPosts",postsArray);
    },
    GetPost:async (context,id)=>{
      const res = await fetch("https://jessesfoodblog.herokuapp.com/blogposts/" + id,{
        method:"GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const postArray = await res.json();
      console.log(postArray);
      context.commit("SetPost",postArray);
    },
      DeletePost:async (id)=>{
          const res = await fetch("https://jessesfoodblog.herokuapp.com/blogposts/" + id,{
            method:"DELETE",
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }) 
          const deleted_post = res.json();
          console.log(deleted_post);
   
      },
    ShowComment:async (context,id)=>{
        const res = await fetch("https://jessesfoodblog.herokuapp.com/comments/blogposts/" + id,{
          method:"GET",
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        const comments_Array =await res.json();
        console.log(comments_Array);
        context.commit("SetComments",comments_Array);
    },
    
      AddComment:async (payload)=>{
        const res = await fetch("https://jessesfoodblog.herokuapp.com/comments",{
          method:"POST",
          body:JSON.stringify({
           user_id:payload.user_id,
           topic_id:payload.topic_id,
           comment:payload.comment,
           date:payload.date
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }) 
        const comment_added = res.json();
        console.log(comment_added);
    },
      
      DeleteComment:async (id)=>{
          const res = await fetch("https://jessesfoodblog.herokuapp.com/comments/" + id,{
            method:"DELETE",
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }) 
          const deleted_comment = res.json();
          console.log(deleted_comment);
        }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
