<template>
    <div :class="[$style.footer, 'abs-fullsize']">
        <transition name="slide-up">
            <div :class="$style.wrapper" v-show="test">
                <div :class="$style['font-size']">1</div>
            </div>
        </transition>
        <div :class="$style.controller">
            <span><i class="fas fa-bars fa-lg"></i></span>
            <span><i class="fas fa-plane fa-lg"></i></span>
            <span><i class="fas fa-sun fa-lg"></i></span>
            <span @click="test=!test"><i class="fas fa-font fa-lg"></i></span>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    data() {
        return {
            test: false
        };
    },
    mounted() {
        console.log($);
    }
};
</script>

<style lang="less" module>
@import '../../assets/style/config.less';

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
    height: @g-barHeight;

    i {
        margin: 0 20px;
    }
}

.wrapper {
    height: @g-barHeight;
    overflow: hidden;
}

.font-size {
    height: @g-barHeight;
    background-color: greenyellow;
}
</style>