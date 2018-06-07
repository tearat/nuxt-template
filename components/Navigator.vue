<template>
    <div id="navigator">
        <nav>
            <router-link class="router-link" to="/">index</router-link>
            <router-link class="router-link" v-for="link in links" :to="link" :key="link">{{link}}</router-link>
        </nav>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                links: [ 'controls', 'posts' ]
            }
        },
        created() {
        }
    }

</script>


<style lang="less" scoped>
    #navigator {
        width: 800px;
        margin: 0 auto;
/*        background-color: #111;*/
        nav {
            text-align: center;
            height: 26px;
            .router-link {
                padding: 5px 30px;
/*                background-color: #555;*/
/*                color: white;*/
                &:hover {
                    background-color: #777;
                }
            }
        }
    }

</style>
