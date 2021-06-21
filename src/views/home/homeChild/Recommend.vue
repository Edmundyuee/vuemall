<template>
    <div class="recommend">
        <div class="recommend_item" v-for="(item,index) in recommend" :key="index">
            <a :href="item.link">
                <img class="recommend_img" :src="item.image" alt="">            
            </a>
            <div class="recommend_title">
                {{item.title}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Recommend',
        props:[
            'recommend'
        ]
    }
</script>

<style scoped>
    .recommend{
        display: flex;
        width: 100%;
        text-align: center;
        margin-top: 10px;
    }
    .recommend_item{
        flex: 1;
        text-align: center;
    }
    .recommend_img{
        width: 50px;
    }
    .recommend_title{
        font-size: 14px;
    }
</style>