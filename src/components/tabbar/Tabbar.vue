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
    }
</style>
