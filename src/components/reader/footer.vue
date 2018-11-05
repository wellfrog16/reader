<template>
    <div :class="[$style.footer, 'abs-fullsize']">
        <div :class="$style.wrapper">
            <div :class="[$style['font-size'], 'hide']"></div>
        </div>
        <div :class="$style.controller">
            <span><i class="fas fa-bars fa-lg"></i></span>
            <span><i class="fas fa-plane fa-lg"></i></span>
            <span><i class="fas fa-sun fa-lg"></i></span>
            <span @click="toggle('font-size')"><i class="fas fa-font fa-lg"></i></span>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    data() {
        return {
            test: true
        };
    },
    mounted() {
        console.log(1);
    },
    methods: {
        toggle(name) {
            const height = $(`.${this.$style['controller']}`).height();
            const wrapper = $(`.${this.$style.wrapper}`);
            const target = $(`.${this.$style[name]}`);
            const isOpen = !target.hasClass('hide');

            if (isOpen) {
                wrapper.stop().animate({height: 0}, 300, () => wrapper.find('>div').addClass('hide'));
            } else {
                wrapper.find('>div').addClass('hide');
                target.removeClass('hide');
                wrapper.stop().animate({height}, 300);
            }
        }
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
    height: 0;
    overflow: hidden;
}

.font-size {
    height: @g-barHeight;
}
</style>