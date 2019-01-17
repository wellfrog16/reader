<template>
    <div :class="$style.main">
        <ul>
            <li v-for="item in list"
                :key="item.id"
                @click="nav(item.href)"
            >{{ item.label }}</li>
        </ul>
        <div class="close flex-center" @click="close">关 闭</div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    computed: {
        ...mapState(['navigation']),
        list() {
            return this.navigation.toc;
        }
    },
    methods: {
        nav(href) {
            console.log(href);
        },
        close() {
            this.comsDelete('navigation');
            this.toggleMask();
        }
    },
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
</style>