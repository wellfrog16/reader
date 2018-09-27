<template>
    <div :class="['abs-fullsize', $style.mask]">
        <div :class="$style.prev" @click="prev()"></div>
        <div :class="$style.body"></div>
        <div :class="$style.next" @click="next()"></div>
    </div>
</template>

<script>
export default {
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
