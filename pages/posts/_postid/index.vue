<template>
    <PostDetail :post="fetchedPost"/>
    
</template>

<script>
import PostDetail from "@/components/post/PostDetail"
import axios from "axios"
export default {
    components :{
        PostDetail
    },
    asyncData(context){
        return axios.get("https://koseyazilari-1a66b-default-rtdb.firebaseio.com/posts/" + context.params.postid + ".json" )
        .then(response => {
            return {
                fetchedPost : response.data
            }
        })
    }
}
</script>