<template>
  <div class="tab-bar-item" @click="itemCilck">
    <div v-if="!isActived">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!--<div :class="{fontColor: isActived}">-->
    <div :style="activeColorStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    props:{
      path: String,
      activeColor : {
        type: String,
        default: 'red',
      }
    },
    data() {
      return {
        // isActived:false,
        fontColor:"fontColor"
      }
    },
    computed: {
      isActived(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeColorStyle(){
        return this.isActived ? { color : this.activeColor} : { }
      }
    },
    methods: {
      itemCilck(){
        // console.log(this.path);
        this.$router.push(this.path);
        // if(this.$router.path != this.path){
        //   this.$router.replace(this.path);
        // }
      },

    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin: 3px 0 1px 0;
    vertical-align: middle;
  }
</style>
