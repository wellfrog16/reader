<template>
    <div :class="['abs-fullsize', $style.mask]">
        <div :class="$style.prev"></div>
        <div :class="$style.body"></div>
        <div :class="$style.next"></div>
    </div>
</template>

<script>
    export default {
        
    }
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