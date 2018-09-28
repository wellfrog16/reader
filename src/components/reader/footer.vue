<template>
    <div :class="[$style.footer, 'abs-fullsize']">
        <span><i class="fas fa-bars fa-lg"></i></span>
        <span><i class="fas fa-font fa-lg"></i></span>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" module>
.footer {
    z-index: 10;
    top: initial;
    bottom: 0;
    height: 75px;
    background-color: #fff;
    box-shadow: 0 -5px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;

    i {
        margin: 0 20px;
    }
}
</style>