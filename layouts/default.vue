<template>
  <div>
    <navigator/>
    <nuxt/>
  </div>
</template>

<script>
    import Navigator from '~/components/Navigator.vue'
    import Style from '~/assets/Style.less'
    import stars from '~/assets/stars.json'

    export default {
        components: {
            Navigator
        },
        created() {
            this.$store.commit('setStars', stars.stars);
        }
    }

</script>

<style>
    html {
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
    }

</style>
