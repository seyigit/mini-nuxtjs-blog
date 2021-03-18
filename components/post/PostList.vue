<template>
<div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <post v-for="post in posts" :key="post.id" :is-admin="isAdmin" :post="post"/>
</div>

</template>
<script>
import post from "@/components/post/post"
export default {
    components : {
        post,
    },
    props : {
        isAdmin : {
            type: Boolean,
            required : false,
            default : false,
        },
        posts : {
            required : true,
            type : Array,

        }
    }
}
</script>