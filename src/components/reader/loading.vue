<template>
    <div :class="['abs-fullsize flex-center', $style.main]" v-if="visible">
        <span>正在加载电子书<br>loading</span>
    </div>
</template>

<script>
export default {
    props: {
        'visible': {type: Boolean, default: true}
    },
};
</script>

<style lang="less" module>
.main {
    background-color: #fff;
    text-align: center;
}
</style>