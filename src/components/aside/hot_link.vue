<template>
    <div class="hot_link">
    <h2>电影活动 &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·</h2>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <a :href="item.url" target="_blank">
          {{item.title}}
        </a>
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
          this.list = await this.$axios('/hotlinks')
        }
    }
</script>

<style lang="scss" scoped>

</style>