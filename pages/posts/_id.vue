<template>
    <div id="page" v-if="id">
        <h1>#id={{id}}</h1>
        <p>title: {{title}}</p>
        <p>text: {{text}}</p>
        <nav>
            <router-link class="router-link" to="/posts">back</router-link>
        </nav>
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
        methods: {
            getPost(id) {
                if ( posts[this.id - 1] != undefined ) {
                    this.title = posts[this.id - 1].title;
                    this.text = posts[this.id - 1].text;
                } else {
                    this.$router.replace('/404');
                }
            }
        },
        mounted() {
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


<style scoped lang="less">
    
    #page {
        nav {
            margin-left: 20px;
            margin-right: 20px;
        }
        .router-link {
            display: block;
            padding: 10px;
            background-color: rgba(255,255,255,0.1);
            transition: 0.25s ease;
            color: white;
            &:hover {
                background-color: rgba(255,255,255,0.25);
            }
        }
    }

</style>