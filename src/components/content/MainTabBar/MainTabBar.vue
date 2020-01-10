<template>
  <div>
    <Tabbar>
      <TabbarItem path="/home" activeColor="#ff00cc">
        <img slot="item-icon" src="~assets/img/tarbar/home.png" alt="首页">
        <img slot="item-icon-active" src="~assets/img/tarbar/home_active.png" alt="首页">
        <div slot="item-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/category" activeColor="#ff00cc">
        <img slot="item-icon" src="~assets/img/tarbar/category.png" alt="分类">
        <img slot="item-icon-active" src="~assets/img/tarbar/category_active.png" alt="分类">
        <div slot="item-text">分类</div>
      </TabbarItem>
      <TabbarItem path="/superise" activeColor="#ff00cc">
        <img slot="item-icon" src="~assets/img/tarbar/suprise.png" alt="京喜">
        <img slot="item-icon-active" src="~assets/img/tarbar/suprise.png" alt="京喜">
        <div slot="item-text">京喜</div>
      </TabbarItem>
      <TabbarItem path="/cart" activeColor="#ff00cc">
        <img slot="item-icon" src="~assets/img/tarbar/shopcar.png" alt="购物车">
        <img slot="item-icon-active" src="~assets/img/tarbar/shopcar_active.png" alt="购物车">
        <div slot="item-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile" activeColor="#ff00cc">
        <img slot="item-icon" src="~assets/img/tarbar/profile.png" alt="我的">
        <img slot="item-icon-active" src="~assets/img/tarbar/profile_active.png" alt="我的">
        <div slot="item-text">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from '../../common/tabbar/Tabbar'
  import TabbarItem from '../../common/tabbar/TabbarItem'
  export default {
    name: "MainTabBar",
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped>

</style>
