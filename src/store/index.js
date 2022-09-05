import router from '@/router'
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    users: null,
    user: null,
    token: null,
    posts: null,
    post: null,
    comments: null,
    comment: null,
  },
  getters: {
  },
  mutations: {
    SetUsers(state, users) {
      state.user = users
    },
    SetUser(state, user) {
      state.user = user

    },
    SetToken(state, token) {
      state.token = token
    },
    SetPosts(state, posts) {
      state.posts = posts
    },
    SetPost(state, post) {
      state.post = post
    },
    SetComments(state, comments) {
      state.comments = comments
    },
    Logout(state) {
      state.user = "",
        state.token = ""

    },
  },
  actions: {

    ShowUsers: async (context) => {
      const res = await fetch("https://jessesfoodblog.herokuapp.com/users", {
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const UsersArray = await res.json();
      console.log(UsersArray);
      context.commit("SetUsers", UsersArray);
    },

    Verify: async (context, token) => {
      const res = await fetch("https://jessesfoodblog.herokuapp.com/users/users/verify", {
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-auth-token': `${token}`
        },
      })
        .then(res => res.json())
        .then(userDetails => {
          console.log(userDetails.user);
          context.commit("SetUser", userDetails.user)
        })

      // router.push({
      //   name:"posts"
      // })
    },

    Login: async (context, payload,) => {
      const res = await fetch("https://jessesfoodblog.herokuapp.com/users/login", {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(res => res.json())
        .then(tokendata => {
          console.log(tokendata);
          console.log(tokendata.token);

          //if (data.token){}
          context.commit("SetToken", tokendata.token)
        });
      // const ver = app.methods.Verify(context,token)
      //   return ver
    },


    Register: async (context, payload) => {
       await fetch("https://jessesfoodblog.herokuapp.com/users/register", {
        mode:"cors",
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(res => res.json())
        .then(newUser => {
          console.log(newUser);
          context.commit("SetToken", newUser.token)
           context.commit("setUser", json);
        })
    },

    AddPost: async (context, Land) => {
      console.log(Land);
      const res = await fetch("https://jessesfoodblog.herokuapp.com/blogposts", {
        method: "POST",
        body: JSON.stringify({
          Post: Land.Post
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const added_post = res.json();
      console.log(added_post);
    },
    ShowPosts: async (context) => {
      const res = await fetch("https://jessesfoodblog.herokuapp.com/blogposts", {
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const postsArray = await res.json();
      console.log(postsArray);
      context.commit("SetPosts", postsArray);
    },
    GetPost: async (context, id) => {
      const res = await fetch("https://jessesfoodblog.herokuapp.com/blogposts/" + id, {
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const postArray = await res.json();
      console.log(postArray);
      context.commit("SetPost", postArray);
    },
    DeletePost: async (id) => {
      const res = await fetch("https://jessesfoodblog.herokuapp.com/blogposts/"+ id, {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json());
        const commentDeleted = res.json();
      console.log(commentDeleted);

    },
    ShowComment: async (context, id) => {
      const res = await fetch("https://jessesfoodblog.herokuapp.com/comments/blogposts/" + id, {
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const comments_Array = await res.json();
      console.log(comments_Array);
      context.commit("SetComments", comments_Array);
    },

    AddComment: async (context, payload) => {
      const res = await fetch("https://jessesfoodblog.herokuapp.com/comments", {
        mode: "cors",
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const commentAdded = await res.json();
      console.log(commentAdded);
    },

    DeleteComment: async (id) => {
      console.log(id);
      const res = await fetch("https://jessesfoodblog.herokuapp.com/comments/" + id, {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      
      const deleted_comment = res.json()
      // .then((res) => deleted_comment);
      // console.log(res);
      console.log(deleted_comment);
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
