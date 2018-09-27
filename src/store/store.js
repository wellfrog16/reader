import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ebook: null
    },
    mutations: {
        setEBook(state, ebook) {
            state.ebook = ebook;
        }
    },
    actions: {

    },
});
