<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .nav-bar{
        display: flex;
        width: 100%;
        height: 44px;
        top: 0;
        line-height: 44px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        background-color: #ff5777;
    }
    .left{
        width: 60px;
    }
    .center{
        flex: 1;
    }
    .right{
        width: 60px;
    }
</style>