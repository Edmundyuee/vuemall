<template>
    <div class="tabitem">
        <slot name="tabbaritem"></slot>
    </div>
</template>

<script>
    export default {
        name: 'Tabbar'
    }
</script>

<style scoped>
    .tabitem{
        width: 100%;
        height: 49px;
        position: fixed;
        bottom: 0;
        display: flex;
        box-shadow: 0 -1px 5px rgba(0, 0, 0, .3);
        padding-top: 5px;
        background-color: #f6f6f6;
    }
</style>
