<template>
  <div class="goods">
    <GoodsListsItem v-for="item in goods" :goods-item="item"></GoodsListsItem>
    <!--我是goodslists-->
    <!--{{goods}}-->
  </div>
</template>

<script>
  import GoodsListsItem from './GoodsListsItem'
  export default {
    name: "GoodsLists",
    props: {
      goods: {
        type: Array,
        data(){
          return []
        }
      }
    },
    components: {
      GoodsListsItem
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    display: -webkit-flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
