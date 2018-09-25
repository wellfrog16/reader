<template>
    <div class="ebook rel-fullsize">
        <div class="wrapper rel-fullsize">
            <div id="read"></div>
            <div :class="['abs-fullsize', $style.mask]">
                <div :class="$style.prev"></div>
                <div :class="$style.body"></div>
                <div :class="$style.next"></div>
            </div>
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

<style lang="less" module>
.mask {
    display: flex;
}

.prev {
    flex: 0 0 150px;
}

.body {
    flex: 1;
}

.next {
    flex: 0 0 150px;
}
</style>

