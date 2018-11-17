<template>
    <div :class="[$style.footer, 'abs-fullsize']">
        <transition name="opacity">
            <div :class="[$style.mask, 'abs-fullsize', 'flex-center']" v-show="showMask">
                <div :class="$style.wrapper">
                    <font-size :class="[$style['font-size'], 'hide']" />
                </div>
            </div>
        </transition>
        <div :class="$style.toggle">
            <div :class="[$style.test, 'hide']"></div>
        </div>
        <div :class="$style.controller">
            <span><i class="fas fa-bars fa-lg"></i></span>
            <span @click="toggle('test')"><i class="fas fa-plane fa-lg"></i></span>
            <span><i class="fas fa-sun fa-lg"></i></span>
            <span @click="toggle('font-size')"><i class="fas fa-font fa-lg"></i></span>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import {mapState, mapMutations} from 'vuex';
import FontSize from './com/fontsize.vue';

export default {
    components: {FontSize},
    data() {
        return {
            test: true
        };
    },
    mounted() {
        console.log(1);
    },
    methods: {
        ...mapMutations(['toggleMask']),
        toggle(name) {
            // const mask = $(`.${this.$style.mask}`);
            const target = $(`.${this.$style[name]}`);

            const handle = {
                'font-size': () => {
                    this.toggleMask();
                    // mask.css({opacity: 0}).removeClass('hide').animate({opacity: 1});
                    target.removeClass('hide');
                    console.log('font-size');
                }
            };

            handle[name]();
        }
        // toggle(name) {
        //     const height = $(`.${this.$style['controller']}`).height();
        //     const wrapper = $(`.${this.$style.toggle}`);
        //     const target = $(`.${this.$style[name]}`);
        //     const isOpen = !target.hasClass('hide');

        //     if (isOpen) {
        //         wrapper.stop().animate({height: 0}, 300, () => wrapper.find('>div').addClass('hide'));
        //     } else {
        //         wrapper.find('>div').addClass('hide');
        //         target.removeClass('hide');
        //         wrapper.stop().animate({height}, 300);
        //     }
        // }
    },
    computed: {
        ...mapState(['showMask']),
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

    span {
        display: inline-block;
        padding: 15px;
    }

    i {
        margin: 0 20px;
    }
}

.mask {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
}

.wrapper {
    width: 600px;
    height: 800px;
    background-color: greenyellow;
}

.toggle {
    height: 0;
    overflow: hidden;
}

.test {
    height: @g-barHeight;
}
</style>