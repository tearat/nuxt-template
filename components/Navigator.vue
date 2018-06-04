<template>
    <div id="navigator">
        <nav>
            <router-link class="router-link" to="/">index</router-link>
            <router-link class="router-link" to="/test">test</router-link>
            <router-link class="router-link" to="/posts">posts</router-link>
            <router-link class="router-link" to="/base">base</router-link>
        </nav>
    </div>
</template>


<script>

export default {
    data () {
        return {
        }
    }
}

</script>


<style lang="less" scoped>

#navigator {
    nav {
        background-color: #111;
        text-align: center;
        height: 26px;
        .router-link {
            padding: 5px 30px;
            background-color: #555;
            color: white;
            &:hover {
                background-color: #777;
            }
        }
    }
}

</style>