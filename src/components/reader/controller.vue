<template>
    <div class="controller abs-fullsize">
        <xheader></xheader>
        <div :class="['abs-fullsize', $style.mask]">
            <div :class="$style.prev" @click="prev()"></div>
            <div :class="$style.body"></div>
            <div :class="$style.next" @click="next()"></div>
        </div>
        <xfooter></xfooter>
    </div>
</template>

<script>
import xheader from '@/components/reader/header.vue';
import xfooter from '@/components/reader/footer.vue';

export default {
    components: {xheader, xfooter},
    mounted() {
    },
    methods: {
        prev() {
            this.$store.state.ebook.prev();
        },
        next() {
            this.$store.state.ebook.next();
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
