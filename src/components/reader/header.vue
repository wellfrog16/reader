<template>
    <div :class="[$style.header, 'abs-fullsize']">
        <div><span><i class="fas fa-chevron-left fa-lg"></i></span></div>
        <div>
            <span><i class="fas fa-user fa-lg"></i></span>
            <span><i class="fas fa-ellipsis-v fa-lg"></i></span>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" module>
.header {
    z-index: 10;
    height: 75px;
    background-color: #fff;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;

    span {
        padding: 15px;
        margin: 0 10px;
    }
}
</style>