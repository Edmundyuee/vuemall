<template>
    <div>
        <!-- 顶部导航栏 -->
        <nav-bar>
            <template v-slot:center>
                购物街
            </template>
        </nav-bar>
        <!-- 轮播图 -->
        <carousel :banners="banners"/>
        <recommend :recommend="recommend"/>
    </div>
</template>

<script>
import NavBar from 'components/navbar/NavBar'
import {getHomeMultidata} from '../../network/home'
import Carousel from 'components/carousel/Carousel'
import Recommend from './homeChild/Recommend'
    export default {
        components: { NavBar,Carousel,Recommend},
        data(){
            return {
                banners: [],
                recommend: []
            }
        },
        name: 'Home',
        created(){
            getHomeMultidata().then(res => {
                console.log(res);
                this.banners = res.data.banner.list;
                this.recommend = res.data.recommend.list;
            })
        }
    }
</script>

<style scoped>

</style>