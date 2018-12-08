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
        },
        toggleController() {
            this.showController = !this.showController;
        }
    },
    computed: {
        ...mapState(['rendition', 'fontSize', 'theme'])
    },
    watch: {
        fontSize(val) {
            this.rendition.themes.fontSize(val);
        },
        theme(val) {
            this.rendition.themes.select(val);
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
