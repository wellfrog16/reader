<template>
    <div class="controller abs-fullsize">
        <transition name="slide-down">
            <xheader v-show="showController"></xheader>
        </transition>
        <div :class="['abs-fullsize', $style.mask]">
            <div :class="$style.prev" @click="prev()"></div>
            <div :class="$style.body" @click="toggleController()"></div>
            <div :class="$style.next" @click="next()"></div>
        </div>
        <transition name="slide-up">
            <xfooter v-show="showController"></xfooter>
        </transition>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import xheader from '@/components/reader/header.vue';
import xfooter from '@/components/reader/footer.vue';

export default {
    components: {xheader, xfooter},
    data() {
        return {
            showController: false
        };
    },
    methods: {
        prev() {
            this.rendition.prev();
        },
        next() {
            this.rendition.next();
            const currentLocation = this.rendition.currentLocation();
            // Get the Percentage (or location) from that CFI
            const currentPage = this.book.locations.percentageFromCfi(currentLocation.start.cfi);
            console.log(currentPage);
            // console.log(this.locations.generate());
            // console.log(this.locations.percentageFromCfi);
        },
        toggleController() {
            this.showController = !this.showController;
        }
    },
    computed: {
        ...mapState(['book', 'rendition', 'locations', 'fontSize', 'theme', 'progress'])
    },
    watch: {
        fontSize(val) {
            this.rendition.themes.fontSize(val);
        },
        theme(val) {
            this.rendition.themes.select(val);
        },
        progress(val) {
            const percent = val / 100;
            const location = percent >= 0 ? this.locations.cfiFromPercentage(percent) : 0;
            this.rendition.display(location);
        }
    }
};
</script>

<style lang="less" module>
    .mask {
        display: flex;
    }

    .prev, .next {
        flex: 0 0 150px;
    }

    .body {
        flex: 1;
    }
</style>
