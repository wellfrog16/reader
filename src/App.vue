<template>
    <div id="app" class="a">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
import $ from 'jquery'; // eslint-disable-line

export default {
    mounted() {
        console.log($);
    }
};
</script>

<style lang="less">
@import './assets/style/main.less';

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    border: 1px solid red;
    border-radius: 20px;
    display: flex;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
