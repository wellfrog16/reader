<template>
    <div :class="$style.main">
        <ul>
            <li v-for="item in list"
                :key="item"
                class="flex-center"
                :class="{highlight: item === parseInt(fontSize)}"
                :style="styleFontSize(item)"
                @click="setFontSize(`${item}px`)"
            >我想要这么大的字号</li>
        </ul>
        <div class="close flex-center" @click="close">关 闭</div>
    </div>
</template>

<script>
// import $ from 'jquery';
import {mapState, mapMutations} from 'vuex';

export default {
    data() {
        return {
            list: [14, 16, 18, 20, 22, 24]
        };
    },
    methods: {
        ...mapMutations(['toggleMask', 'setFontSize', 'comsDelete']),
        styleFontSize(size) {
            return `font-size: ${size}PX`;
        },
        close() {
            this.comsDelete('font-size');
            this.toggleMask();
        }
    },
    computed: {
        ...mapState(['fontSize'])
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
        flex-direction: column;
        flex-grow: 1;
        background-color: white;
    }

    li {
        flex-grow: 1;
        cursor: pointer;

        & + li {
            border-top: 1px solid #ccc;
        }

        &:hover {
            background-color: #e5e5e5;
        }

        &:global(.highlight) {
            background-color: rgb(255, 250, 208);
        }
    }
}
</style>
