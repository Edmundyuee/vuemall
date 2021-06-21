<template>
  <el-carousel height="195.1px" :interval="5000" arrow="always">
    <el-carousel-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
          <img ref="image" :src="item.image" alt="" class="imgs">
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    name: 'Carousel',
    props:['banners'],
    data(){
        return{
            imgHeight:""
        }
    },
    methods:{
       
    },
    mounted(){
    //   window.addEventListener("resize", () => {
    //     this.imgHeight = this.$refs.image[0].height;
    //     console.log(this.imgHeight);
    //   });
    }
}
</script>


<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
  }
  .imgs{
      width: 100%;
  }
</style>