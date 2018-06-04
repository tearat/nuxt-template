import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        stars: 0
    },
    mutations: {
        increment(state) {
            state.stars++
        },
        decrement(state) {
            state.stars--
        },
        setStars(state, stars) {
            state.stars = stars
        }
    }
})

export default store
