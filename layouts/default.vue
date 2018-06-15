<template>
  <div id="root" v-bind:class="color_scheme ? color_scheme : 'default'">
    <navigator/>
    <div id="page">
        <router-link to="/">
            <img src="~/assets/img/logo.png" class="logo">
        </router-link>
    </div>
    <nuxt />
  </div>
</template>

<script>
    
    import Vue from 'vue'
    import VueCookie from 'vue-cookie'
    Vue.use(VueCookie);
    
    import Navigator from '~/components/Navigator.vue'
    import style from '~/assets/style/Style.less'
    
    import stars from '~/assets/data/stars.json'
    

    export default {
        data() {
            return {
                color_scheme: ""
            }
        },
        components: {
            Navigator
        },
        mounted() {
            this.$store.commit('stars_set', stars.stars);
            this.color_scheme = this.$cookie.get('color_scheme');
        },
        watch: {
            "$route" () {
                this.color_scheme = this.$cookie.get('color_scheme');
            }
        }
    }

</script>

<style lang="less">
    
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
