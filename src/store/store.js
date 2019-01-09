import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        book: null,
        rendition: null,
        maskVisible: false,
        coms: [],
        fontSize: '16px',
        theme: 'default',
        themeList: [
            {
                name: 'default',
                style: {
                    body: {
                        'color': '#000', 'background-color': '#fff', 'line-height': '1.75em'
                    }
                }
            },
            {
                name: 'eye',
                style: {
                    body: {
                        'color': '#000', 'background-color': '#ceeaba', 'line-height': '1.75em'
                    }
                }
            },
            {
                name: 'night',
                style: {
                    body: {
                        'color': '#fff', 'background-color': '#000', 'line-height': '1.75em'
                    }
                }
            },
            {
                name: 'gold',
                style: {
                    body: {
                        'color': '#000', 'background-color': 'rgb(241,236,226)', 'line-height': '1.75em'
                    }
                }
            }
        ],
        progress: 0,
        isProgressDisabled: true,
        locations: null,
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
        },
        setTheme(state, theme) {
            state.theme = theme || state.theme;
            localStorage.bookTheme = state.theme;
        },
        setProgress(state, progress) {
            state.progress = progress;
        },
        setProgressDisabled(state, isDisabled) {
            state.isProgressDisabled = isDisabled;
        },
        setLocations(state, locations) {
            state.locations = locations;
        },
        comsAdd(state, name) {
            state.coms.push(name);
        },
        comsDelete(state, name) {
            state.coms.splice(state.coms.indexOf(name), 1);
        },
        comsClear(state) {
            state.coms = [];
        }
    },
    actions: {

    },
});
