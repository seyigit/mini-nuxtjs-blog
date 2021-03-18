<template>
    <PostForm 
    @submit="updatePost($event)"
    :post="fetchedPost" 
    :isUpdate="true"/> 
</template>

<script>
import PostForm from "@/components/admin/PostForm"
import axios from "axios"
export default {
    components : {
        PostForm
    },
        asyncData(context){
        return axios.get("https://koseyazilari-1a66b-default-rtdb.firebaseio.com/posts/" + context.params.postid + ".json" )
        .then(response => {
            return {
                fetchedPost : response.data
            }
        })
    },
    methods : {
        updatePost(editedPost){
            this.$store.dispatch("updatePost",{...editedPost,id : this.$route.params.postid})
            .then(response => {
                this.$router.push("/admin")
            })
        }
    }
}
</script>