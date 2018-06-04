<template>
  <div>
    <navigator/>
    <div id="page">
        <router-link to="/">
            <img src="~/assets/logo.png" class="logo">
        </router-link>
    </div>
    <nuxt/>
  </div>
</template>

<script>
    
    import Navigator from '~/components/Navigator.vue'
    import Style from '~/assets/Style.less'
    
    import stars from '~/assets/stars.json'
    
    import cookie from '~/plugins/cookie/cookie.js'
    import set_scheme from '~/plugins/set_scheme/set_scheme.js'

    export default {
        components: {
            Navigator
        },
        mounted() {
            this.$store.commit('stars_set', stars.stars);
            set_scheme.set(this);
        }
    }

</script>

<style lang="less">
    body {
/*        background-image: url(~/assets/bg.jpg);*/
    }
    
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
    
    #page {
        text-align: center;
        .logo {
            width: 120px;
            padding-top: 40px;
        }
    }

</style>
