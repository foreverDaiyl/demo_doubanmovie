<template>
    <section class="gaia">
    <!-- head -->
    <div class="fliter-wp row">
      <h2><div class="activate">{{title}}</div></h2>
      <div class="filter flex-1">
        <div class="tags">
          <ul class="tag-list row">
            <li v-for="(value,key) in typeList" :key="key" :class="key==curType?'activate':''" @click="setCurType(key)">{{value}}</li>
          </ul>
        </div>
      </div>
      <a href="/explore#!type=movie&amp;tag=%E7%83%AD%E9%97%A8" class="more-link">更多»</a>
    </div>
    <!-- head -->
    <!-- list -->
    <div class="list-wp">
      <div class="slider">
        <div class="slide-container">
          <div class="slide-wrapper" style="">
            <!-- page -->
            <div class="slide-page">
              <!-- item -->
              <a :href="item.href" class="item" target="_blank"  v-for="item in list" :key="item.id">
                <div class="cover-wp">
                  <img
                    :src="item.img|imgPath"
                    :alt="item.title"
                  />
                </div>
                <p>
                  <span class="green" v-if="item.isnew=='true'">
                    <img
                      src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"
                      width="16"
                      class="new"
                    />
                  </span>
                  {{item.title}}
                   <strong>{{item.rate}}</strong>
                </p>
              </a>
              <!-- item -->
            </div>
            <!-- page -->
          </div>
        </div>

        <div class="slide-ctrl ui-slide-control">
          <a class="btn-prev" href="javascript:void(0)" @click="prevPage"></a>
          <i class="dot" :class="dot==page?'activate':''" v-for="dot in total" :key="dot"></i>
          <a class="btn-next" href="javascript:void(0)" @click="nextPage"></a>
        </div>
      </div>
    </div>
    <!-- list -->
  </section>
</template>

<script>
import axios from 'axios'
    export default {
        props:['catalog','title'],
        data() {
          return {
            typeList: [],
            curType:'',
            list:[],
            page:1,
            total:0
          }
        },
        async created(){
          let data=await this.$axios(`/gaia/${this.catalog}/typelist`)
          this.typeList=data

          let firstKey=''
          for(let key in data){
            firstKey=key
            break
          }

          this.curType=firstKey

          this.getList(this.catalog,this.curType)
        },
        methods:{
          setCurType(type){
            this.curType=type;
            this.getList(this.catalog,type)
          },
          async getList(catalog,type,pageNum){
            let {list,page,total}=await this.$axios(`/gaia/${catalog}`,{type,page:pageNum})
            
            this.list=list;
            this.page=page;
            this.total=total;
          },
          prevPage(){
            if(this.page>1){
              this.page--
              this.getList(this.catalog,this.curType,this.page)
            }
          },
          nextPage(){
            if(this.page<this.total){
              this.page++
              this.getList(this.catalog,this.curType,this.page)
            }
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>