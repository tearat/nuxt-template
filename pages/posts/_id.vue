<template>
    <div id="page" v-if="id">
        <h1>#id={{id}}</h1>
        <p>title: {{title}}</p>
        <p>text: {{text}}</p>
        <div class="_center">
<!--            <router-link to="/posts">back</router-link>-->
        </div>
    </div>
</template>


<script>
    
    import posts from '~/assets/posts.json'
    
    export default {
        data() {
            return {
                id: "",
                title: "",
                text: ""
            }
        },
        components: {
//            posts
        },
        methods: {
            getPost(id) {
                if ( id == NaN ) id=1;
                this.title = posts[this.id-1].title;
                this.text = posts[this.id-1].text;
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.getPost(this.id)
        },
        watch: {
            '$route' () { // Этот скрипт следит за обновлением URL
                this.id = this.$route.params.id;
                this.getPost(this.id)
            }
        }
    }

</script>


<style scoped>
    #page {}

</style>
