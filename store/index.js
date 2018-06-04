import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        stars: 0
    },
    mutations: {
        stars_increment(state) {
            state.stars++
        },
        stars_decrement(state) {
            state.stars--
        },
        stars_set(state, stars) {
            state.stars = stars
        },
    }
})

export default store