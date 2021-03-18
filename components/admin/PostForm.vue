<template>
    <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center alig-items-center">
        <form  style="width:500px;" @submit.prevent="onSubmit">
            <fieldset>
                <legend v-if="isUpdate">Köşe Yazısı Düzenle</legend>
                <legend v-else>Yeni Köşe Yazısı</legend>
                <div class="form-group">
                    <label>Yazar Adı</label>
                    <input type="text" class="form-control" placeholder="Yazarın adını giriniz" v-model="post.author">
                </div>
                <div class="form-group">
                    <label>Başlık</label>
                    <input type="text" class="form-control" placeholder="Yazının başlığını giriniz" v-model="post.title">
                </div>
                <div class="form-group">
                    <label>Alt Başlık</label>
                    <input type="text" class="form-control" placeholder="Yazının Alt başlığını giriniz" v-model="post.subTitle">
                </div>
                <div class="form-group">
                    <label for="exampleTextarea">Köşe Yazısı</label>
                    <textarea class="form-control" rows="5" v-model="post.text"></textarea>
                </div>
                <button @click="$router.push('/admin')" class="btn btn-danger">İptal</button>
                <button class="btn btn-primary" type="submit">Kaydet</button>
            </fieldset>
        </form>
    </div>
</template>
<script>
export default {
    data () {
        return {
            post : {
                title : null,
                subTitle:null,
                author:null,
                text:null
            }
        }
    },
    props : {
        isUpdate : {
            type : Boolean,
            required : false,
            default : false,
        },
        post : {
            type : Object,
            required : false,
        }
    },
    methods : {
        onSubmit (){
            this.$emit("submit",this.post)
        }
    },
    created (){
        this.post = this.post ? this.post : {
            id:null,
            title : null,
            subTitle:null,
            author:null,
            text:null
        }
    }
}
</script>