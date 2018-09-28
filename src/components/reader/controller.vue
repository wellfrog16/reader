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
import xheader from '@/components/reader/header.vue';
import xfooter from '@/components/reader/footer.vue';

export default {
    components: {xheader, xfooter},
    data() {
        return {
            showController: false
        };
    },
    mounted() {
    },
    methods: {
        prev() {
            this.$store.state.ebook.prev();
        },
        next() {
            this.$store.state.ebook.next();
        },
        toggleController() {
            this.showController = !this.showController;
        }
    }
};
</script>

<style lang="less">
    .slide-down-enter, .slide-down-leave-to {
        transform: translateY(-100%);
    }

    .slide-up-enter, .slide-up-leave-to {
        transform: translateY(100%);
    }

    .slide-down-enter-to,
    .slide-down-leave,
    .slide-up-enter-to,
    .slide-up-leave {
        transform: translateY(0);
    }

    .slide-down-enter-active,
    .slide-down-leave-active,
    .slide-up-enter-active,
    .slide-up-leave-active {
        transition: all 300ms linear;
    }
</style>


<style lang="less" module>
    .mask {
        display: flex;
    }

    .prev,
    .next {
        flex: 0 0 150px;
    }

    .body {
        flex: 1;
    }
</style>
