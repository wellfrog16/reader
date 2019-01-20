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
import {mapState, mapMutations} from 'vuex';
import xheader from '@/components/reader/header.vue';
import xfooter from '@/components/reader/footer.vue';
import utils from '@/utils/utils';

export default {
    components: {xheader, xfooter},
    data() {
        return {
            showController: false,
            pageChange: 0
        };
    },
    methods: {
        ...mapMutations(['saveProgress']),
        prev() {
            this.rendition.prev();
            this.saveProgress();
        },
        next() {
            this.rendition.next();
            this.saveProgress();
        },
        toggleController() {
            this.showController = !this.showController;
        }
    },
    computed: {
        ...mapState(['locations', 'rendition', 'fontSize', 'theme', 'progress', 'navigation'])
    },
    watch: {
        fontSize(val) {
            this.rendition.themes.fontSize(val);
        },
        theme(val) {
            this.rendition.themes.select(val);
        },
        progress(val) { // 仅保存进度
            utils.localStorage.set('epub-progress', val);
        },
        navigation(val) {
            this.rendition.display(val).then(() => {
                this.saveProgress();
            });
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
