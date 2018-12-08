<template>
    <div :class="[$style.footer, 'abs-fullsize']">
        <transition name="opacity">
            <div :class="[$style.container, 'abs-fullsize', 'flex-center']" v-show="maskVisible">
                <div :class="[$style.mask, 'abs-fullsize']" @click.stop="closeMask"></div>
                <div :class="$style.wrapper">
                    <font-size class="font-size hide" />
                    <theme class="theme hide" />
                </div>
            </div>
        </transition>
        <div :class="$style.toggle">
            <div :class="[$style.test, 'hide']"></div>
        </div>
        <div :class="$style.controller">
            <span><i class="fas fa-bars fa-lg fa-fw"></i></span>
            <span @click="toggle('test')"><i class="fas fa-plane fa-lg fa-fw"></i></span>
            <span @click="toggle('theme')"><i class="fas fa-sun fa-lg fa-fw"></i></span>
            <span @click="toggle('font-size')"><i class="fas fa-font fa-lg fa-fw"></i></span>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import {mapState, mapMutations} from 'vuex';
import FontSize from './com/fontsize.vue';
import Theme from './com/theme.vue';

export default {
    components: {FontSize, Theme},
    data() {
        return {
            test: true,
            com: ['font-size']
        };
    },
    mounted() {
        console.log(1);
    },
    methods: {
        ...mapMutations(['toggleMask']),
        toggle(name) {
            // const mask = $(`.${this.$style.mask}`);
            const target = $(`.${this.$style.wrapper} .${name}`);
            target.removeClass('hide');
            this.toggleMask();

            // const handle = {
            //     'font-size': () => {
            //         this.toggleMask();
            //         // mask.css({opacity: 0}).removeClass('hide').animate({opacity: 1});
            //         console.log(target);
            //         target.removeClass('hide');
            //         console.log('font-size');
            //     },
            //     'theme': () => {
            //     }
            // };

            // handle[name]();
        },
        closeMask() {
            $(`.${this.$style.wrapper}>div`).addClass('hide');
            this.toggleMask();
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
        ...mapState(['maskVisible']),
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
        cursor: pointer;
    }

    i {
        margin: 0 20px;
    }
}

.container {
    position: fixed;
}

.mask {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
}

.wrapper {
    width: 600px;
    height: 800px;
    position: relative;
    z-index: 2;
}

.toggle {
    height: 0;
    overflow: hidden;
}

.test {
    height: @g-barHeight;
}
</style>