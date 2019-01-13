<template>
    <div :class="$style.main">
        <input :class="$style.progress">
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import $ from 'jquery';

export default {
    data() {
        return {
            target: null
        };
    },
    mounted() {
        $(`.${this.$style.progress}`).ionRangeSlider({
            skin: 'square',
            min: 0,
            max: 100,
            step: 0.01,
            from: this.progress,
            disable: this.isProgressDisabled,
            onFinish: target => {
                // 设置进度值
                let val = target.from;
                const percent = val / 100;
                this.setPage(percent);

                // 保存进度值
                setTimeout(() => {
                    this.saveProgress();
                }, 500);
            }
        });

        // 设置实例
        this.target = $(`.${this.$style.progress}`).data('ionRangeSlider');
    },
    methods: {
        ...mapMutations(['saveProgress', 'setPage']),
    },
    computed: {
        ...mapState(['locations', 'rendition', 'progress', 'isProgressDisabled'])
    },
    watch: {
        isProgressDisabled(val) {
            this.target.update({disable: val});
        },
        progress(val) {
            this.target.update({
                from: val * 100
            });
        }
    }
};
</script>

<style lang="less" module>
@import '../../../assets/style/config.less';

.main {
    height: @g-barHeight * 2;
    padding: 20px 20px 0 20px;
}

.progress {
    // width: 100%;
    // height: 10px;
    // -webkit-appearance: none;
    // background: -webkit-linear-gradient(#333, #999) no-repeat, #ddd;
    // background-size: 10% 100%;
    color: aqua;
}
</style>