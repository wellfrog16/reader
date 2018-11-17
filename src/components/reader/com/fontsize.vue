<template>
    <div :class="$style.main">222</div>
</template>

<script>
export default {
    data() {
        return {
            list: [12, 14, 16, 18]
        };
    }
};
</script>

<style lang="less" module>
@asd: 16PX;

.main {
    font-size: @asd;
}
</style>
