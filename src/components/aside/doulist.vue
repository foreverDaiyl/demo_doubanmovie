<template>
    <div id="doulist">
    <h2>热门豆列</h2>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <span>{{item.recommend}}推荐</span>
        <div class="title"><a target="_blank" :href="item.url">{{item.title}}</a></div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        data() {
          return {
            list: []
          }
        },
        async created(){
          this.list= await this.$axios('/doulist')
        }
    }
</script>

<style lang="scss" scoped>

</style>