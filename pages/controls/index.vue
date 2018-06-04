<template>
    <div id="page">
        <h1>Control page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sed aspernatur porro asperiores culpa illum eum sunt suscipit libero ipsam tenetur, iusto deleniti assumenda totam, blanditiis recusandae pariatur aut inventore officiis iste tempora. Iusto tempore, fugit error earum id excepturi reprehenderit, dolorum reiciendis consectetur quos explicabo pariatur possimus cum, molestias.</p>
        <div class="_center">
            <div class="buttons">
                <div @click="$store.commit('stars_decrement')">-</div>
                <div>{{ $store.state.stars }}</div>
                <div @click="$store.commit('stars_increment')">+</div>
            </div>
            <h2>Color scheme:</h2>
            <select v-model="color_scheme" @change="save">
                <option value="dark">dark</option>
                <option value="light">light</option>
            </select>
        </div>
    </div>
</template>


<script>
    
    import set_scheme from '~/plugins/set_scheme/set_scheme.js'
    
    export default {
        data() {
            return {
                color_scheme: ''
            }
        },
        methods: {
            save() {
                this.$cookie.set('color_scheme', this.color_scheme, 1);
                set_scheme.set(this);
            }
        },
        mounted() {
            this.color_scheme = this.$cookie.get('color_scheme');
        }
    }

</script>


<style scoped lang="less">
    #page {
        .buttons {
            display: inline-block;
            /*        width: 160px;*/
            font-size: 20px;
            border: 1px solid grey;
            border-radius: 5px;
            user-select: none;
            div {
                display: inline-block;
                &:nth-child(1) {
                    padding-left: 20px;
                    padding-right: 20px;
                    cursor: pointer;
                }
                &:nth-child(2) {
                    border-left: 1px solid grey;
                    border-right: 1px solid grey;
                    padding-left: 20px;
                    padding-right: 20px;
                    padding-bottom: 5px;
                }
                &:nth-child(3) {
                    padding-left: 20px;
                    padding-right: 20px;
                    cursor: pointer;
                }
            }
        }
        
        select {
            padding: 5px 20px;
            background-color: transparent;
            color: #eee;
            option {
                color: #111;
            }
        }
    }

</style>
