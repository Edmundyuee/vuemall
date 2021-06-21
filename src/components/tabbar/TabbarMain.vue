<template>
  <div>
    <tabbar>
      <template v-slot:tabbaritem>
        <tabbar-item path="/home">
          <template v-slot:img>
            <img src="../../assets/img/home.svg" alt="">
          </template>
          <template v-slot:img_active>
            <img src="../../assets/img/homeActive.svg" alt="">
          </template>
          <template v-slot:text>
            首页
          </template>
        </tabbar-item>
        <tabbar-item path="/category">
          <template v-slot:img>
            <img src="../../assets/img/category.svg" alt="">
          </template>
          <template v-slot:img_active>
            <img src="../../assets/img/categoryActive.svg" alt="">
          </template>
          <template v-slot:text>
            更多
          </template>
        </tabbar-item>
        <tabbar-item path="/cart">
          <template v-slot:img>
            <img src="../../assets/img/cart.svg" alt="">
          </template>
          <template v-slot:img_active>
            <img src="../../assets/img/cartActive.svg" alt="">
          </template>
          <template v-slot:text>
            购物车
          </template>
        </tabbar-item>
        <tabbar-item path="/profile">
          <template v-slot:img>
            <img src="../../assets/img/profile.svg" alt="">
          </template>
          <template v-slot:img_active>
            <img src="../../assets/img/profileActive.svg" alt="">
          </template>
          <template v-slot:text>
            我的
          </template>
        </tabbar-item>
      </template>
      
    </tabbar>
  </div>
</template>

<script>
import Tabbar from './Tabbar'
import TabbarItem from './TabbarItem.vue'
    export default {
        name: 'TabbarMain',
        components: {
            Tabbar,
            TabbarItem
        }
    }
</script>

<style scoped>

</style>