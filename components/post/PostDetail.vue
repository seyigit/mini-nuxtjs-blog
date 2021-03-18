<template>
<div class="container mt-5 d-flex flex-column justify-content-center align-items-center">
    <blockquote class="blockquote text-center">
        <h3>{{post.title}}</h3>
        <p>{{post.subTitle}}</p>
        <p class="mb-0">{{post.text}}</p>
        <footer class="blockquote-footer text-warning">Yazılım Mühendisi <cite title="Source Title">{{post.Author}}</cite> </footer>
    </blockquote>
</div>

</template>

<script>
export default {
    props : {
        post : {
            type:Object,
            require : true,
        }
    }
}
</script>