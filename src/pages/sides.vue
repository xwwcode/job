<template>
    <div class="sides">
        <v-header :titles ='titles' :url='path'></v-header>
        <div class="content">
          <div class="title">头条新闻</div>
          <div class="list">
            <ul>
              <li v-for='(item, index) in message' :key='index' data-type='0' class="list-item">
                <div class="left" @touchstart.capture="touchStart" @touchend.capture="touchEnd" @click="skip"> 
                    <div>
                        <img :src="item.img">
                      </div>
                      <div class="message">
                        <dl>
                          <dt>{{item.content}}</dt>
                          <dd>{{item.time}}</dd>
                        </dl>
                      </div>
                </div>
                <div class="delete" @click="deleteItem" :data-index="index">删除</div>
              </li>
            </ul>
          </div>
        </div>
    </div>
</template>
<script>
   import Header from "../components/header.vue";
  export default {
    components: {
      'v-header': Header
    },
    data() {
      return {
        titles: '仿QQ侧滑删除功能',
        path: '/Swiper',
        currentIndex: null,
        message: [
          {
            img: '../../static/timg.jpg',
            content: '"特朗普堡"将成真？美国与波兰讨论在波境内设美军永久基地',
            time: '2019.3.12 10:48'
          },
          {
            img: '../../static/timg.jpg',
            content: '"特朗普堡"将成真？美国与波兰讨论在波境内设美军永久基地',
            time: '2019.3.12 10:49'
          },
          {
            img: '../../static/timg.jpg',
            content: '"特朗普堡"将成真？美国与波兰讨论在波境内设美军永久基地',
            time: '2019.3.12 10:50'
          },
          {
            img: '../../static/timg.jpg',
            content: '"特朗普堡"将成真？美国与波兰讨论在波境内设美军永久基地',
            time: '2019.3.12 10:51'
          }
        ]
      }
    },
    methods: {
      //跳转
		skip(){
			if( this.checkSlide() ){
				this.restSlide();
      } else {
				alert('You click the slide!')
      }
		},
		//滑动开始
		touchStart(e){
		    // 记录初始位置
			this.startX = e.touches[0].clientX;
		},
		//滑动结束
		touchEnd(e){
      // 当前滑动的父级元素
			let parentElement = e.currentTarget.parentElement;
			// 记录结束位置
			this.endX = e.changedTouches[0].clientX;

      // 左滑
			if( parentElement.dataset.type == 0 && this.startX - this.endX > 30  ){
				this.restSlide();
				parentElement.dataset.type = 1;
			}

      // 右滑
			if( parentElement.dataset.type == 1 && this.startX - this.endX < -30 ){
				this.restSlide();
				parentElement.dataset.type = 0;
			}

			this.startX = 0;
			this.endX = 0;
		},
      //判断当前是否有滑块处于滑动状态
      checkSlide(){
			  let listItems = document.querySelectorAll('.list-item');
        for( let i = 0 ; i < listItems.length ; i++){
          if( listItems[i].dataset.type == 1 ) {
            return true;
          }
        }
        return false;
      },
      //复位滑动状态
      restSlide(){
        let listItems = document.querySelectorAll('.list-item');
        // 复位
        for( let i = 0 ; i < listItems.length ; i++){
          listItems[i].dataset.type = 0;
        }
      },
      //删除
      deleteItem(e){
        // 当前索引
        let index = e.currentTarget.dataset.index;
        // 复位
        this.restSlide();
        // 删除
        this.message.splice(index,1);
      }
    },
    mounted() {
      var arr = [3, 1, 4, 6, 5, 7, 2,4,1];

function bubbleSort(arr) {
for (var i = 0; i < arr.length - 1; i++) {
    for(var j = 0; j < arr.length - 1; j++) {
        if(arr[j + 1] < arr[j]) {
            var temp;
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
return arr;
}

console.log(bubbleSort(arr));
    }
  }
</script>
<style scoped>
  .sides{
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .content{
    margin-top: 30px;
    width: 100%;;
  }
  .title {
    font-size: 20px;
    text-align: center;
  }
  .list ul li {
    position: relative;
    height: 60px;
    padding-left:5px;
    border-bottom: 1px solid #ccc;
    transition: all 0.2s;
  }
  .list-item[data-type="0"]{
    transform: translate3d(0,0,0);
  }
  .list-item[data-type="1"]{
    transform: translate3d(-60px,0,0);
  }
  .left{
    width: 100%;
    display: flex;
  }
  .list ul li img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .delete{
    position: absolute;
    background: #ff4949;
    color: #fff;
    height: 100%;
    width: 60px;
    top: 0;
    right: -60px;
    font-size: 14px;
    text-align: center;
    line-height: 60px;
    animation: all 1s;
    z-index: 100;
  }
  .message {
    flex: 1;
  }
  .message dl {
    display: flex;
    height: 100%;
    flex-direction: column;
    font-size: 14px;
    padding-left: 15px;
  }
</style>