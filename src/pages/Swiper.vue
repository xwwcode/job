<template>
  <div class="swiper">
      <v-header :titles ='titles' :url='path'></v-header>
      <div class="content">
          <swiper :options="swiperOption" ref='mySwiper'>
            <swiper-slide v-for='(item, index) in img' :key='index'>
              <img :src="item" alt="">
            </swiper-slide>
          </swiper>
          <div class="message" v-for='(item, index) in message' :key='index'>
            <div v-show='currentIndex == index'>
                <div class="hero">
                  <h2>英雄</h2>
                  <p>{{item.name}}</p>
                </div>
                <div class="story">
                  <h2>背景故事</h2>
                  <p>{{item.story}}</p>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
  import Header from "../components/header.vue";
  import 'swiper/dist/css/swiper.css' // 这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import api from '../axios/api.js'
  let that = null;
  export default{
    components: {
      'v-header': Header,
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {//swiper3
          watchSlidesProgress: true, 
          loop: false, 
          autoplay: false,
          on: {
            slideChangeTransitionEnd(e) {
              that.currentIndex = this.activeIndex
            }
          }
        },
        titles: 'Swiper',
        currentIndex: 0,
        path: '/pullDown',
        img: [],
        message: []
      }
    },
    mounted () {
      that = this;
      this.setNewsApi()
    },
    methods: {
      setNewsApi() {
        api.post('/news/index')
        .then(res => {
          this.img = res.articles.img;
          this.message = res.articles.message;
        });
      },
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    }
  }
</script>
<style scoped>
  .swiper{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .swiper-slide-active{
    width: 80%;
  }
  .content{
    flex: 1;
    background: linear-gradient(45deg, #35394a 0%, #1f222e 100%);
  }
  .message{
    margin-top: 2rem;
    padding: 0 2rem;
    color: #fff;
  }
  .story{
    margin-top: 2rem;
  }
  p{
    text-indent: 2.4rem;
    font-size: 12px;
    margin-top: 1rem;
    line-height: 1.6rem;
  }
</style>