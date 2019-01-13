<template>
    <div class="ebook rel-fullsize">
        <div class="wrapper rel-fullsize">
            <div id="read"></div>
            <controller />
        </div>
        <loading :visible="loadingVisible" />
    </div>
</template>

<script>
import Epub from 'epubjs';
import {mapState, mapMutations} from 'vuex';
import config from '@/config';
import utils from '@/utils/utils';

import Controller from '@/components/reader/controller.vue';
import Loading from '@/components/reader/loading.vue';

const BOOK_URL = `${config.absPath}/book/book.epub`;

export default {
    name: 'reader',
    components: {Controller, Loading},
    data() {
        return {
            bookUrl: `${config.absPath}/book/book.epub`,
            loadingVisible: true
        };
    },
    mounted() {
        this.loadEpub();
        this.registerTheme();
        // 设置字体
        this.setFontSize(utils.localStorage.get('epub-fontSize') || this.fontSize);
        // 设置主题
        this.setTheme(utils.localStorage.get('epub-theme') || this.theme);
        // 显示电子书
        this.showEpub();
    },
    methods: {
        ...mapMutations(['setBook', 'setRendition', 'setFontSize', 'setTheme', 'setProgress', 'setLocations', 'setPage', 'setProgressDisabled']),
        loadEpub() {
            const book = new Epub(BOOK_URL);
            const rendition = book.renderTo('read', {
                width: window.innerWidth,
                height: window.innerHeight
            });

            this.setBook(book);
            this.setRendition(rendition);
            // this.$store.commit('setBook', rendition);
            book.ready.then(() => {
                this.setLocations(book.locations);
                return book.locations.generate();
            }).then(() => {
                // 加载进度
                const progress = utils.localStorage.get('epub-progress');
                this.setProgress(progress);
                this.setPage(progress);
                this.setProgressDisabled(false);
                setTimeout(() => {
                    this.loadingVisible = false;
                }, 1000);
            });
        },
        showEpub() {
            this.rendition.display();
        },
        registerTheme() { // 注册主题
            this.themeList.forEach(item => {
                this.rendition.themes.register(item.name, item.style);
            });
        }
    },
    computed: {
        ...mapState(['rendition', 'fontSize', 'theme', 'themeList'])
    }
};
</script>
