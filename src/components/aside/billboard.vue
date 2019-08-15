<template>
    <div id="billboard">
        <div class="billboard-hd">
        <h2>
            一周口碑榜<span><a href="https://movie.douban.com/chart">更多榜单»</a></span>
        </h2>
        </div>
        <div class="billboard-bd">
        <ul>
            <li class="row" v-for="(item,index) in list" :key="index">
            <span class="order">{{index+1}}</span>
            <p class="title"><a :href="item.url">{{item.title}}</a></p>
            </li>
        </ul>
        </div>
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
            this.list = await this.$axios('/billboard')
        }
    }
</script>

<style lang="scss" scoped>

</style>