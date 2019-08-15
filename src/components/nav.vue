<template>
    <div id="db-nav-movie" class="nav">
        <search></search>
        <links></links>
    </div>
</template>

<script>
import search from './nav/search.vue'
import links from './nav/links.vue'

    export default {
        components:{
            search,
            links
        }
    }
</script>

<style lang="scss" scoped>

</style>