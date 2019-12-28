import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        trenutniuser: 'Nesto',
        token:''
    },
    mutations: {
        updatedComp(state, newID) {
            console.log("iz store = " + newID)
            state.trenutniuser = newID
        },
        setToken(state, newToken){
            console.log("Iz store = "+ newToken);
            state.token = newToken
        }

    },
    getters: {
        trenutniuser: state => state.trenutniuser,
        token: state => state.token
    },
})
