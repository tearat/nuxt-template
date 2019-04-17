<template>
    <div id="page">
        <h1>Drag page</h1>

        <p>list: {{ list }}</p>

        <ul>
            <draggable v-model="list">
                <li v-for="(item, key) in list" v-bind:key="key">{{ item }}</li>
            </draggable>
        </ul>

    </div>
</template>


<script>
    import draggable from 'vuedraggable'

    export default {
        components: {
            draggable
        },
        data() {
            return {
                list: [1, 2, 3, 4, 5],
            }
        }
    }

</script>


<style lang="less" scoped>
    #page {
        ul {
            margin: 0 20px;
            padding: 0;
            list-style: none;
            text-align: left;

            li {
                padding: 5px 10px;
                background-color: rgba(255, 255, 255, 0.25);
                margin-bottom: 2px;
                cursor: move;
                transition: 0.25s ease;

                &:hover {
                    background-color: rgba(255, 255, 255, 0.5);
                }
            }
        }
    }

</style>
