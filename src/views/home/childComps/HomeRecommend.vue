<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommend: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 14px;
    padding: 10px 0px 15px;
    border-bottom: 8px solid #e7e7e7;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }
</style>
