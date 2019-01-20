import Vue from 'vue';
import Vuex from 'vuex';
import utils from '@/utils/utils';

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
        navigation: null
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
            utils.localStorage.set('epub-fontSize', state.fontSize);
        },
        setTheme(state, theme) {
            state.theme = theme || state.theme;
            utils.localStorage.set('epub-theme', state.theme);
        },
        setProgress(state, progress) {
            state.progress = progress;
        },
        saveProgress(state) {
            const currentLocation = state.rendition.currentLocation();
            if (currentLocation.start && currentLocation.end) {
                const currentPage = state.book.locations.percentageFromCfi(currentLocation.start.cfi);
                this.commit('setProgress', currentPage);
            }
        },
        setPage(state, percent) {
            const location = percent >= 0 ? state.locations.cfiFromPercentage(percent) : 0;
            state.rendition.display(location);
        },
        setProgressDisabled(state, isDisabled) {
            state.isProgressDisabled = isDisabled;
        },
        setLocations(state, locations) {
            state.locations = locations;
        },
        setNavigation(state, navigation) {
            state.navigation = navigation;
        },
        comsAdd(state, name) {
            state.coms.push(name);
        },
        comsDelete(state, name) { // 弃用
            state.coms.splice(state.coms.indexOf(name), 1);
        },
        comsClear(state) {
            state.coms = [];
        }
    },
    actions: {

    },
});
