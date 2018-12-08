<template>
    <div class="ebook rel-fullsize">
        <div class="wrapper rel-fullsize">
            <div id="read"></div>
            <controller />
        </div>
    </div>
</template>

<script>
import Epub from 'epubjs';
import {mapState, mapMutations} from 'vuex';
import config from '@/config';

import controller from '@/components/reader/controller.vue';

const BOOK_URL = `${config.absPath}/book/book.epub`;

export default {
    name: 'reader',
    components: {controller},
    data() {
        return {
            bookUrl: `${config.absPath}/book/book.epub`
        };
    },
    mounted() {
        this.loadEpub();
        this.registerTheme();
        // 设置字体
        this.setFontSize(localStorage.getItem('bookFontSize') || this.fontSize);
        // 设置主题
        this.setTheme(localStorage.getItem('bookTheme') || this.theme);
        // 显示电子书
        this.showEpub();
    },
    methods: {
        ...mapMutations(['setBook', 'setRendition', 'setFontSize', 'setTheme']),
        loadEpub() {
            const book = new Epub(BOOK_URL);
            const rendition = book.renderTo('read', {
                width: window.innerWidth,
                height: window.innerHeight
            });

            this.setBook(book);
            this.setRendition(rendition);
            // this.$store.commit('setBook', rendition);
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
