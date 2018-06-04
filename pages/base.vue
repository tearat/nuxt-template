<template>
    <div id="page">
        <h1>Base</h1>
        <router-link to="/base/1">1</router-link>
        <router-link to="/base/2">2</router-link>
        <nuxt-child/>
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


<style scoped>

#page{
    
}

</style>