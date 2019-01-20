<template>
    <div :class="$style.main">
        <div :class="$style.wrapper">
            <ul>
                <li v-for="item in list"
                    :key="item.id"
                    v-tap="() => {setNavigation(item.href);}"
                >{{ item.label }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import IScroll from 'iscroll';

export default {
    mounted() {
        // eslint-disable-next-line
        new IScroll(`.${this.$style.wrapper}`, {
            scrollbars: true,
            mouseWheel: true
        });
    },
    computed: {
        ...mapState(['book']),
        list() {
            return this.book.navigation.toc;
        }
    },
    methods: {
        ...mapMutations(['setNavigation'])
    },
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
        flex-grow: 1;
        background-color: white;
        overflow-y: auto;
    }

    li {
        flex-grow: 1;
        cursor: pointer;
        line-height: 80px;
        padding: 0 20px;

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

.wrapper {
    height: 100%;
    overflow: hidden;
}
</style>