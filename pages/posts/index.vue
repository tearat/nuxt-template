<template>
    <div id="page">
        <h1>Posts</h1>
        <nav>
            <router-link class="router-link" v-for="link in links" :to="'/posts/'+link.id" :key="link.id">{{link.title}}</router-link>
        </nav>
        <nuxt-child v-if="$route.params.is"/>
    </div>
</template>


<script>
    
    export default {
        data() {
            return {
                links: [{
                        id: "1",
                        title: "first"
                    },
                    {
                        id: "2",
                        title: "second"
                    },
                ]
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
