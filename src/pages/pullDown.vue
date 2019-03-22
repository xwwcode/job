<template>
    <div class="pullDown"> 
        <v-header :titles ='titles' :url='path'></v-header>
        <loading class="loading" v-show='loadingIs'></loading>
        <div ref='pull' class="scrol">
          <div class="list">
            <ul>
              <li v-for='(item, index) in pullData' :key='index'>
                <dl>
                  <dt>
                    <img :src="item.thumbnail_pic_s" alt="">
                  </dt>
                  <dd>{{item.title}}</dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
    </div>
</template>
<script>
  import Header from "../components/header.vue";
  import loading from '../components/loding.vue';
  import Bscroll from 'better-scroll';
  import api from '../axios/api.js'
  export default{
    components: {
      'v-header': Header,
      loading
    },
    data() {
      return {
        titles: '下拉刷新',
        path: '/',
        pullData: [],
        loadingIs: false
      }
    },
    methods: {
      _Bscroll() {
        this.pullDown = new Bscroll(this.$refs.pull,{
          click: true,
          scrollY: true,
          pullDownRefresh: {
            threshold: 30, // 下拉距离超过30px触发pullingDown事件
            stop: 0 // 回弹停留在距离顶部20px的位置
          }
        })
        this.pullDown.on('pullingDown', () => {
          this.loadingIs = true;
          setTimeout(() => {
            this.getNewsApi();
            this.pullDown.finishPullDown(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
            this.loadingIs = false;
          }, 1000) 
        });
      },
      getNewsApi() {
        api.post('/news/pullData')
        .then(res => {
          let ary = res.pullData;
          this.pullData = [...ary, ...this.pullData];
        });
      },
    },
    mounted() {
      this.$nextTick(() => {
        this._Bscroll();
        this.getNewsApi();
      })
    }
  }
</script>
<style scoped>
  .pullDown{
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .loading{
    width: 100%;
    height: 4rem !important;
    position: initial !important;
    justify-content: center;
  }
  .scrol{
    flex: 1;
    overflow: hidden;
  }
  ul{
    display: flex;
    flex-flow: row wrap;
  }
  li{
    width: 46%;
    padding-left: 2%;
  }
</style>