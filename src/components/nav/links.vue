<template>
    <div class="nav-secondary">
        <div class="nav-items">
        <ul>
            <li v-for="(nav,index) in navs" :key="index"><a :href="nav.href" v-html="nav.title"></a></li>
        </ul>
        </div>

        <a href="https://movie.douban.com/annual/2018?source=movie_navigation" class="movieannual2018"></a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navs:[]
            }
        },
        async created(){
            this.navs=await this.$axios('/navs')
        }
    }
</script>

<style lang="scss" scoped>

</style>