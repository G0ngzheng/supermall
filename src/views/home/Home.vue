<template>
  <div id="home">
    <NavBar class="nav-home"><div slot="center">蘑菇街</div></NavBar>
    <Scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentscroll"
            :pull-up-load="true"
            @pullingup="loadmore"
    >
      <HomeSwiper :banner="banner"></HomeSwiper>
      <HomeRecommend :recommend="recommend"></HomeRecommend>
      <HomePopular></HomePopular>
      <TabControl class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>
      <GoodsLists :goods="showGoods"></GoodsLists>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isBackShow"></BackTop>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommend from './childComps/HomeRecommend'
  import HomePopular from './childComps/HomePopular'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsLists from 'components/content/goodLists/GoodsLists'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import {getHomeMultidata,getHomeGoods,getHomeGoodsMocky} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomePopular,
      TabControl,
      GoodsLists,
      Scroll,
      BackTop

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
        isBackShow: false
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
        // 数据请求完成需要重新刷新视口高度
        this.$refs.scroll.refresh()
      }
    },
    methods: {
      /**
       * 事件监听相关
       */
      /**
       * 回到顶部
       */
      backClick(){
        // console.log("点击事件");
        this.$refs.scroll.scrollTo(0,0,500)
      },
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
      contentscroll(pos){
        // console.log(pos);
        this.isBackShow = (-pos.y) > 1000
      },
      loadmore(){
        console.log("上拉加载更多home");
        this.getHomeGoods(this.currentType)
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

          // 请求完成之后调用上次加载更多完成方法
          this.$refs.scroll.finishPullUp()
        })

      },
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    /*height: 100vh;*/
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
  /**
     方案1：定位
   */
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
  }


  /**
   方案2：计算属性
   */
  /*.content {*/
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 51px;*/
  /*}*/
</style>
