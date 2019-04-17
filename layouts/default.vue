<template>
    <div id="root" v-bind:class="color_scheme ? color_scheme : 'default'">
        <navigator />
        <div id="page">
            <nuxt-link to="/">
                <img src="~/assets/img/logo.png" class="logo">
            </nuxt-link>
        </div>
        <nuxt />
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueCookie from 'vue-cookie'
    //    import VueDraggable from 'vue-draggable'

    Vue.use(VueCookie);
    //    Vue.use(VueDraggable)

    import Navigator from '~/components/Navigator.vue'
//    import style from '~/assets/style/Style.less'

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
            "$route"() {
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

    #root {
        background-color: grey;
        min-height: 100vw;
        background-size: 100%;

        &.default {
            background-color: #111;
            color: #eee;

            #navigator {
                background-color: #222;

                .router-link {
                    color: #eee;
                    background-color: #333;

                    &:hover {
                        background-color: #555;
                    }
                }
            }

            #page {
                background-color: rgba(255, 255, 255, 0.2);
            }
        }

        &.cold_night {
            background-image: url("~/assets/img/snow.jpg");
            color: #ddf;

            #navigator {
                background-color: #334;

                .router-link {
                    color: #ddf;
                    background-color: #556;

                    &:hover {
                        background-color: #667;
                    }
                }
            }

            #page {
                background-color: rgba(0, 0, 0, 0.8);
            }
        }

        &.rainy_morning {
            background-image: url("~/assets/img/rainy.jpg");
            color: #fcc;

            #navigator {
                background-color: firebrick;

                .router-link {
                    color: #fee;
                    background-color: firebrick;

                    &:hover {
                        background-color: orange;
                    }
                }
            }

            #page {
                background-color: rgba(100, 50, 50, 0.8);

                select {
                    color: #fcc;
                }
            }
        }

        &.evergreen {
            background-image: url("~/assets/img/evergreen.jpg");
            color: #dfd;

            #navigator {
                background-color: darkgreen;

                .router-link {
                    color: #efe;
                    background-color: darkgreen;

                    &:hover {
                        background-color: darkseagreen;
                    }
                }
            }

            #page {
                background-color: rgba(0, 50, 0, 0.6);

                select {
                    color: #dfd;
                }
            }
        }
    }

    #page {
        width: 800px;
        margin: 0 auto;
        padding-bottom: 25px;

        &:last-child {
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
        }

        h1,
        h2,
        p {
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 10px;
            padding-top: 10px;
        }

        ._center {
            padding-top: 10px;
            padding-bottom: 10px;
            text-align: center;
        }
    }

</style>
