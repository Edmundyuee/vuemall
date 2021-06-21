<template>
    <div class="item" @click="tabbarClick">
        <div class="imgitem">
            <div v-if="!isActive" class="img">
                <slot name="img"></slot>
            </div>
            <div v-else class="img_active">
                <slot name="img_active"></slot>
            </div>
        </div>
        <div :class="{active:isActive}" class="textitem">
                <slot name="text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabbarItem',
        data(){
            return {
                
            }
        },
        props:{
            path: String
        },
        methods:{
            tabbarClick(){
                this.$router.replace(this.path)
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1;
            }
        }
    }
</script>

<style scoped>
    .imgitem img{
        width: 24px;
        height: 24px;
    }
    .textitem{
        font-size: 14px;
    }
    .item{
        flex: 1;
        text-align: center;
    }
    .active{
        color: #ff8198;
    }
    
</style>