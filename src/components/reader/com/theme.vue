<template>
    <div :class="$style.main">
        <ul>
            <li v-for="item in themeList"
                :key="item.name"
                class="flex-center"
                :style="item.style.body"
                @click="setTheme(item.name)"
            ><span><i class="fas fa-grin-alt fa-lg" v-if="item.name === theme"></i></span>阅读显示效果<br>我喜欢这个<br>点我点我点我</li>
        </ul>
        <div class="close flex-center" @click="close">关 闭</div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
    data() {
        return {};
    },
    methods: {
        ...mapMutations(['toggleMask', 'setTheme', 'comsDelete']),
        close() {
            this.comsDelete('theme');
            this.toggleMask();
        }
    },
    computed: {
        ...mapState(['theme', 'themeList'])
    }
};
</script>

<style lang="less" module>
.main {
    height: 100%;
    display: flex;
    flex-direction: column;

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-grow: 1;
        flex-wrap: wrap;
        background-color: white;
    }

    li {
        width: 50%;
        position: relative;

        span {
            position: absolute;
            top: 15px;
            right: 13px;
        }
    }
}
</style>