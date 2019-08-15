<template>
    <section id="screening">
    <!-- section-hd -->
    <div class="section-hd row">
      <h2 class="flex-1">
        正在热映 <span> <a href="https://movie.douban.com/cinema/nowplaying/changchun/">全部正在热映»</a> </span>
        <span> <a href="https://movie.douban.com/cinema/later/changchun/">即将上映»</a> </span>
      </h2>
      <div class="slide-tip"><span class="ui-slide-index">{{cur+1}}</span> / <span class="ui-slide-max">{{pages.length}}</span></div>
      <div class="ui-slide-control">
        <span class="prev-btn" @click="prev"><a class="btn-prev" href="javascript:void(0)"></a></span>
        <span class="next-btn" @click="next"><a class="btn-next" href="javascript:void(0)"></a></span>
      </div>
    </div>
    <!-- section-hd -->
    <!-- screening-bd -->
    <div class="screening-bd">
      <!-- ul left -700 -->
      <div class="list-wp">
        <div class="slider">
          <div class="slide-container">
            <div class="slide-wrapper" :style="{width:pages.length*700+'px',left:-700*cur+'px'}">
              <!-- page -->
              <div class="slide-page"  v-for="(page,index) in pages" :key="index">
                <!-- item -->
                <div class="ui-slide-item" v-for="(movie,index) in page" :key="index">
                  <ul>
                    <li class="poster">
                      <a href="">
                        <img
                          :src="movie.img|imgPath"
                          :alt="movie.title"
                        />
                      </a>
                    </li>
                    <li class="title"><a class="">{{movie.title}}</a></li>
                    <li class="rating">
                      <!-- ✨星星评分 allstar(00~50)+5 -->
                      <span :class="'rating-star allstar'+movie.star"></span> <span class="subject-rate">{{movie.rate}}</span>
                    </li>
                    <li class="ticket_btn">
                      <span> <a href="" target="_blank">选座购票</a> </span>
                    </li>
                  </ul>
                </div>
                <!-- item -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- screening-bd -->
  </section>
</template>

<script>
    export default {
        data() {
          return {
            cur:0,
            pages: []
          }
        },
        async created(){
          let data=await this.$axios('/screening')
          let result=[]

          while(data.length>0){
            result.push(
              data.splice(0,5)
            )
          }

          this.pages=result;
        },
        methods: {
          prev() {
            if(this.cur>0) this.cur--
          },
          next(){
            if(this.cur<this.pages.length-1) this.cur++
          }
        },
    }
</script>

<style lang="scss" scoped>

</style>