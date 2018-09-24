<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import utils from '@/utils/utils';

utils.autoRootSize();

export default {
    mounted() {
    }
};
</script>

<style lang="less">
@import './assets/style/main.less';
@import './assets/style/common/function.less';
</style>
