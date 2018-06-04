<template>
    <div id="page">
        <h1>Test page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sed aspernatur porro asperiores culpa illum eum sunt suscipit libero ipsam tenetur, iusto deleniti assumenda totam, blanditiis recusandae pariatur aut inventore officiis iste tempora. Iusto tempore, fugit error earum id excepturi reprehenderit, dolorum reiciendis consectetur quos explicabo pariatur possimus cum, molestias.</p>
        <div class="_center">
            <div class="buttons">
                <div @click="$store.commit('decrement')">-</div>
                <div>{{ $store.state.stars }}</div>
                <div @click="$store.commit('increment')">+</div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    data () {
        return {
        }
    },
    created() {
        
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
}

</style>