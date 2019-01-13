<template>
    <div :class="[$style.footer, 'abs-fullsize']">
        <transition name="opacity">
            <div :class="[$style.container, 'abs-fullsize', 'flex-center']" v-show="maskVisible">
                <div :class="[$style.mask, 'abs-fullsize']" @click.stop="closeMask"></div>
                <div :class="$style.wrapper">
                    <font-size v-if="checkCom('font-size')" />
                    <theme v-if="checkCom('theme')" />
                </div>
            </div>
        </transition>
        <div :class="$style.toggle">
            <progresss v-show="checkCom('progresss')" class="progresss hide" />
        </div>
        <div :class="$style.controller">
            <span><i class="fas fa-bars fa-lg fa-fw"></i></span>
            <span @click="slide('progresss')"><i class="fas fa-plane fa-lg fa-fw"></i></span>
            <span @click="toggle('theme')"><i class="fas fa-sun fa-lg fa-fw"></i></span>
            <span @click="toggle('font-size')"><i class="fas fa-font fa-lg fa-fw"></i></span>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import FontSize from './com/fontsize.vue';
import Theme from './com/theme.vue';
import Progresss from './com/progresss.vue';
import $ from 'jquery';

export default {
    components: {FontSize, Theme, Progresss},
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
        ...mapMutations(['toggleMask', 'comsAdd', 'comsDelete', 'comsClear']),
        toggle(name) {
            // 先关闭进度条
            this.slide('progresss', true);

            // 再打开点击的组件
            this.comsAdd(name);
            this.toggleMask();
        },
        closeMask() {
            this.comsClear();
            this.toggleMask();
        },
        checkCom(name) {
            return this.coms.find(item => item === name);
        },
        slide(name, open) {
            this.comsAdd(name);

            this.$nextTick(() => {
                const height = $(`.${this.$style['controller']}`).height() * 2;
                const toggle = $(`.${this.$style.toggle}`);
                const target = $(`.${name}`);
                const isOpen = open || !target.hasClass('hide');

                if (isOpen) {
                    toggle.stop().animate({height: 0}, 300, () => {
                        toggle.find('>div').addClass('hide');
                        this.comsDelete(name);
                    });
                } else {
                    toggle.find('>div').addClass('hide');
                    target.removeClass('hide');
                    toggle.stop().animate({height}, 300);
                }
            });
        }
    },
    computed: {
        ...mapState(['maskVisible', 'coms']),
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
</style>