import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        book: null,
        rendition: null,
        maskVisible: false,
        fontSize: '16px'
    },
    mutations: {
        setBook(state, book) {
            state.book = book;
        },
        setRendition(state, rendition) {
            state.rendition = rendition;
        },
        toggleMask(state) {
            state.maskVisible = !state.maskVisible;
        },
        setFontSize(state, fontSize) {
            state.fontSize = fontSize || state.fontSize;
            localStorage.bookFontSize = state.fontSize;
        }
    },
    actions: {

    },
});
