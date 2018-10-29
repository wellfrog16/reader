<template>
    <div :class="[$style.footer, 'abs-fullsize']">
        <div :class="$style.wrapper">
            <div :class="$style['font-size']" v-show="test"></div>
        </div>
        <div :class="$style.controller">
            <span><i class="fas fa-bars fa-lg"></i></span>
            <span><i class="fas fa-plane fa-lg"></i></span>
            <span><i class="fas fa-sun fa-lg"></i></span>
            <span @click="test=!test"><i class="fas fa-font fa-lg"></i></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            test: false
        };
    }
};
</script>

<style lang="less" module>
.footer {
    z-index: 10;
    top: initial;
    height: initial;
    bottom: 0;
    background-color: #fff;
    box-shadow: 0 -5px 8px rgba(0, 0, 0, 0.2);
    padding: 0 10px;
    box-sizing: border-box;
}

.controller {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;

    i {
        margin: 0 20px;
    }
}

.wrapper {
    height: 0;
    overflow: hidden;
}

.font-size {
    height: 75px;
    background-color: greenyellow;
}
</style>