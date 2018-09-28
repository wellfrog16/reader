<template>
    <div class="ebook rel-fullsize">
        <div class="wrapper rel-fullsize">
            <div id="read">11</div>
            <controller />
        </div>
    </div>
</template>

<script>
import Epub from 'epubjs';
import {mapState} from 'vuex';
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
        this.showEpub();
    },
    methods: {
        loadEpub() {
            const book = new Epub(BOOK_URL);
            const rendition = book.renderTo('read', {
                width: window.innerWidth,
                height: window.innerHeight
            });

            this.$store.commit('setEBook', rendition);
        },
        showEpub() {
            this.ebook.display();
        }
    },
    computed: {
        ...mapState(['ebook'])
    }
};
</script>

<style lang="less" module>
</style>

