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
        this.showEpub();
    },
    methods: {
        ...mapMutations(['setBook', 'setRendition']),
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
        }
    },
    computed: {
        ...mapState(['rendition'])
    }
};
</script>
