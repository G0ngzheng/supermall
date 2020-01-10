<template>
  <div class="tab-control">
    <div v-for="(title,index) in titles"
         class="tab-control-item"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)"
    >
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex:0
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    background-color: white;
    z-index: 1;
  }
  .tab-control-item{
    flex: 1;
    height: 44px;
    line-height: 44px;
  }
  .active{
    color: #ff00cc;
  }
  .active span{
    padding: 5px;
    border-bottom: 2px solid #ff00cc;
  }
</style>
