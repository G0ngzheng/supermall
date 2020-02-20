<template>
   <div class="wrapper" ref="wrapper">
     <div class="content">
       <slot></slot>
     </div>
   </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props:{
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        bs:null
      }
    },

    methods: {
      // 回到某一位置
      scrollTo(x,y,time){
        this.bs.scrollTo(x,y,time)
      },

      // 监听加载完成方法
      finishPullUp(){
        this.bs.finishPullUp()
      },
      // 加载完成之后重新刷新视口高度
      refresh(){
        this.bs.refresh()
      }
    },
    mounted(){
      // const that = this
      /**
       * 创建Scroll对象
       * @type {BScroll}
       */
      this.bs = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      /**
       * 监听滚动事件
       */
      this.bs.on('scroll',(pos)=>{
        // console.log(this)
        this.$emit('scroll',pos)
      })

      /**
       * 监听上拉加载更多
       */
      this.bs.on('pullingUp',()=>{
        // console.log("上拉加载更多");
        this.$emit('pullingup')
        //
      })
    }
  }
</script>

<style scoped>

</style>
