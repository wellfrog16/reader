<template>
    <div :class="$style.main">
        <ul>
            <li v-for="item in list"
                :key="item"
                class="flex-center"
                :class="{highlight: item === parseInt(fontSize)}"
                :style="styleFontSize(item)"
                @click="setSize(item)"
            >我想要这么大的字号</li>
            <li :class="[$style.close, 'flex-center']" @click="close">关 闭</li>
        </ul>
    </div>
</template>

<script>
import $ from 'jquery';
import {mapState, mapMutations} from 'vuex';

export default {
    data() {
        return {
            list: [14, 16, 18, 20, 22, 24]
        };
    },
    methods: {
        ...mapMutations(['toggleMask', 'setFontSize']),
        styleFontSize(size) {
            return `font-size: ${size}PX`;
        },
        close() {
            $(`.${this.$style.main}`).addClass('hide');
            this.toggleMask();
        },
        setSize(size) {
            this.setFontSize(`${size}px`);
            this.ebook.themes.fontSize(`${size}px`);
        }
    },
    computed: {
        ...mapState(['ebook', 'fontSize'])
    }
};
</script>

<style lang="less" module>
.main {
    height: 100%;

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        height: 100%;
        // width: 600px;
        // height: 800px;
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

.close {
    font-size: 20PX;
    background-color: #e5e5e5;
}
</style>
