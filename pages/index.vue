<template>
    <div id="page">
        <h1>Index page</h1>
        <p>Stars: {{ $store.state.stars }}</p>
        <p>Color scheme: {{ color_scheme }}</p>
    </div>
</template>


<script>

export default {
    data () {
        return {
            color_scheme: ""
        }
    },
    mounted() {
        this.color_scheme = this.$cookie.get('color_scheme');
    }
}

</script>


<style scoped>

#page {
    
}

</style>