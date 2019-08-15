<template>
    <section class="reviews">
        <!-- section-hd -->
        <div class="section-hd row">
        <h2 class="flex-1">
            最受欢迎的影评 <span> <a href="https://movie.douban.com/review/best/">更多热门影评»</a> </span>
            <span> <a href="https://movie.douban.com/review/latest/">新片影评»</a> </span>
        </h2>
        </div>
        <!-- section-hd -->
        <!-- reviews-bd -->
        <div class="reviews-bd">
            <!-- review -->
            <div class="review" v-for="(review,index) in list" :key="index">
                <div class="review-hd">
                <a :href="review.movieUrl">
                    <img
                    class="lazy"
                    :src="review.img|imgPath"
                    :alt="review.title"
                    />
                </a>
                </div>
                <!-- review-bd  -->
                <div class="review-bd">
                <h3><a :href="review.subjectUrl" class="">{{review.title}}</a></h3>

                <div class="review-meta">

                    <a :href="review.authorUrl">{{review.author}}</a> 评论
                    <a :href="review.movieUrl">{{review.title}}</a>

                    <span :class="'allstar'+review.rate"></span>
                </div>
                <div class="review-content">
                    {{review.content}}
                    <a :href="review.subjectUrl">(全文)</a>
                </div>
                </div>
            </div>
            <!-- review -->
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                list:[]
            }
        },
        async created(){
            this.list =await this.$axios('/reviews')
        }
    }
</script>

<style lang="scss" scoped>

</style>