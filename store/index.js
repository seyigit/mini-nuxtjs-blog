import axios from "axios";
import Vuex from "vuex";


const createStore = () => {
    return new Vuex.Store({
        state : {
            fetchedPosts : []
        },
        mutations : {   
            setPosts(state,posts){
                state.fetchedPosts = posts
            },
            addPost(state,post){
                state.fetchedPosts.push(post)
            },
            updatePost(state,editedPost){
                let post_index= state.fetchedPosts.findIndex(post => post.id == editedPost.id)

                    state.fetchedPosts[post_index] = editedPost

            }
        },
        actions : {
            nuxtServerInit(vuexContext, context){
                
            
                return axios.get("https://koseyazilari-1a66b-default-rtdb.firebaseio.com/posts.json")
                .then(response => {
                    let data = response.data;
                    let postArray = []
                    for(let key in data){
                        //data["id"] = key
                        postArray.push({id : key,...data[key]})
                    }
                    vuexContext.commit("setPosts",postArray)
                })
            },
            setPosts(vuexContext,posts){
                
                vuexContext.commit("setPosts",posts)
            },
            addPost(vuexContext,post){
                return axios.post("https://koseyazilari-1a66b-default-rtdb.firebaseio.com/posts.json",post)
                .then(response => {
                    vuexContext.commit("addPost",{...post,id : response.data.name})
                    
                })
            },
            updatePost(vuexContext,editedPost){
                return axios.put("https://koseyazilari-1a66b-default-rtdb.firebaseio.com/posts/" + editedPost.id + ".json",editedPost)
                .then(response => {
                    vuexContext.commit("updatePost",editedPost)
                }).catch(e => console.log(e))
            }

        },
        getters : {
            getPosts(state){
                return state.fetchedPosts
            }
        }
    })
}
export default createStore;