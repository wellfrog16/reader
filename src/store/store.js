import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ebook: null,
        showMask: false
    },
    mutations: {
        setEBook(state, ebook) {
            state.ebook = ebook;
        },
        toggleMask(state) {
            state.showMask = !state.showMask;
        }
    },
    actions: {

    },
});
