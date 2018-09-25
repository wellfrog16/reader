<template>
    <div class="ebook">
        <div class="wrapper">
            <div id="read"></div>
        </div>
    </div>
</template>

<script>
import Epub from 'epubjs';
import config from '@/config';

const BOOK_URL = `${config.absPath}/book/book.epub`;

export default {
    name: 'ebook',
    mounted() {
        this.showEpub();
    },
    methods: {
        showEpub() {
            this.book = new Epub(BOOK_URL);
            this.rendition = this.book.renderTo('read', {
                width: window.innerWidth,
                height: window.innerHeight
            });
            this.rendition.display();
        }
    }
};
</script>

<style lang="less">
.ebook {
    #read {
        width: 100vw;
        height: 100vh;
    }
}
</style>

