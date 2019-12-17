import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        trenutniuser: 'Nesto'
    },
    mutations: {
        updatedComp(state, newID) {
            console.log("iz store = " + newID)
            state.trenutniuser = newID
        },
    },
    getters: {
        trenutniuser: state => state.trenutniuser,
    },
})
