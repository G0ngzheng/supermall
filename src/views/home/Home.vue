<template>
  <div id="home">
    <NavBar class="nav-home"><div slot="center">蘑菇街</div></NavBar>
    <HomeSwiper :banner="banner"></HomeSwiper>
    <HomeRecommend :recommend="recommend"></HomeRecommend>
    <HomePopular></HomePopular>
    <TabControl class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>
    <GoodsLists :goods="showGoods"></GoodsLists>
    <div style="height: 700px;"></div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommend from './childComps/HomeRecommend'
  import HomePopular from './childComps/HomePopular'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsLists from 'components/content/goodLists/GoodsLists'

  import {getHomeMultidata,getHomeGoods,getHomeGoodsMocky} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomePopular,
      TabControl,
      GoodsLists

    },
    data(){
      return {
        banner: [],
        recommend: [],
        goods: {
          'pop': { page: 0, list: []},
          'new': { page: 0, list: []},
          'sell': { page: 0, list: []}
        },
        currentType: 'pop',
      }
    },
    created(){
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    computed: {
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /**
       * 事件监听相关
       */
      tabClick(index){
        // console.log(index);
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
        }
      },
      /**
       * 网络请求相关
       */
      // 1 请求多个数据
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          // console.log('首页数据',res)
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        }).catch(error => {
          console.log(error)
        })
      },
      //  2. 请求商品数据
      getHomeGoods(type){

        const page = this.goods[type].page + 1

        getHomeGoods(type,page).then(res => {
          // console.log('商品数据',res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })

      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .nav-home{
    background-color: #ff00cc;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
