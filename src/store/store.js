import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ebook: null,
        showMask: false,
        fontSize: '16px'
    },
    mutations: {
        setEBook(state, ebook) {
            state.ebook = ebook;
        },
        toggleMask(state) {
            state.showMask = !state.showMask;
        },
        setFontSize(state, fontSize) {
            state.fontSize = fontSize || state.fontSize;
            localStorage.ebookFontSize = state.fontSize;
        }
    },
    actions: {

    },
});
