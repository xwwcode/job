<template>
  <div class="home">
      <v-header :titles ='titles' :url='path'></v-header>
      <div class="content">
            <div class="content-left" ref='left'>
                <ul @click='selectClass($event)'>
                  <li v-for='(item, index) in shop.classes' :key='index' :data-index='index' :class='{"heigColor": currentIndex == index}' > 
                    {{item}}
                  </li>
                </ul>
              </div>
              <div class="content-right" ref='right'>
                  <ul>
                    <li v-for='(item, index) in shop.shopName' :key='index' ref='li'>
                      <div class="li-title">{{item.name}}</div>
                      <div class="li-content" v-for='(ite, inde) in item.shop' :key='inde'>
                        <div class="li-content-img">
                        </div>
                        <div>
                          <dl>
                            <dt>{{ite.name}}</dt>
                            <dd class="text">{{ite.text}}</dd>
                            <dd class="pice">￥{{ite.pice}}</dd>
                          </dl>
                        </div>
                      </div>
                    </li>
                  </ul>
              </div>
      </div>
  </div>
   
</template>
<script>
  import Header from "../components/header.vue";
  import Bscroll from 'better-scroll'
  export default{
    components: {
      'v-header': Header
    },
    data() {
      return {
        titles: 'Home页面',
        shop: {
          classes: ['喜茶食验室', '芝士茗茶', '当季限定', '茶冰淇淋', '莓莓芒果家族'],
          shopName: [
            {
              name: '喜茶食验室',
              shop: [
                {
                  img: '../../static/timg.jpg',
                  name: '紫薯千层吐司',
                  text: '下单后不用等待叫号，直接出示给店员领取。醒发后的吐司被田润紫薯泥填充...',
                  pice: 9
                },
                {
                  img: '../../static/timg.jpg',
                  name: '咸蛋黄千层吐司',
                  text: '下单后不用等待叫号，直接出示给店员领取。咸香蛋黄与奶香吐司层层交织，带...',
                  pice: 12
                },
                {
                  img: '../../static/timg.jpg',
                  name: '芋泥糯米糍',
                  text: '糯米糍外皮Q弹软韧，绵柔的芋泥内陷中带着细密颗粒感...',
                  pice: 9
                },
                {
                  img: '../../static/timg.jpg',
                  name: '榴莲糯米糍',
                  text: '糯米糍外皮Q弹软韧，榴莲蓉内陷顺滑，浓郁中带有淡淡奶香...',
                  pice: 18
                },
                {
                  img: '../../static/timg.jpg',
                  name: '流沙牛角',
                  text: '下单后不用等待叫号，直接出示给店员领取。在酥脆的牛角中注入咸蛋黄流沙...',
                  pice: 10
                },
                {
                  img: '../../static/timg.jpg',
                  name: '小芋头条',
                  text: '下单后不用等待叫号，直接出示给店员领取。来自喜茶热麦颇受欢迎的芋头条...',
                  pice: 15
                },
                {
                  img: '../../static/timg.jpg',
                  name: '手撕黑糖吐司(半条)',
                  text: '下单后不用等待叫号，直接出示给店员领取。在外酥内软的丹麦吐司中包入黑糖...',
                  pice: 14
                }, 
              ]
            },
            {
              name: '芝士茗茶',
              shop: [
                {
                  img: '../../static/timg.jpg',
                  name: '绿研',
                  text: '喜茶定制绿茶，较普通绿茶，少了几分涩气，口感清澈，茉莉香气馥郁怡人',
                  pice: 17
                },
                {
                  img: '../../static/timg.jpg',
                  name: '金玉',
                  text: '喜茶定制乌龙，清新茶香中带有桂花香和淡淡的乳香，馥郁怡人',
                  pice: 25
                },
                {
                  img: '../../static/timg.jpg',
                  name: '金凤茶王',
                  text: '喜茶定制乌龙茶，香气炭焙浓郁，入喉回甘，茶香余韵不断',
                  pice: 23
                },
                {
                  img: '../../static/timg.jpg',
                  name: '四季春',
                  text: '喜茶定制清新茶底，茶汤清亮翠绿，茶香悠然绵长',
                  pice: 25
                },
                {
                  img: '../../static/timg.jpg',
                  name: '玉露茶后',
                  text: '源自日本，为日本茶的优先。入口伴有浓郁的海苔和抹茶清香',
                  pice: 29
                },
                {
                  img: '../../static/timg.jpg',
                  name: '嫣红',
                  text: '喜茶定制红茶茶底，汤色红艳明亮，口味丰富深沉',
                  pice: 18
                },
                {
                  img: '../../static/timg.jpg',
                  name: '松露可可',
                  text: '醇香可可，搭配上奶香浓醇的芝士奶霜，口感醇厚，唇齿留香',
                  pice: 26
                },
              ]
            },
            {
              name: '当季限定',
              shop: [
                {
                  img: '../../static/timg.jpg',
                  name: 'MINI喜茶',
                  text: '小小瓶身，可爱满分。不同的组合搭配，充满无线可能的灵感之茶，为你的生活...',
                  pice: 18
                },
                {
                  img: '../../static/timg.jpg',
                  name: '多肉葡萄',
                  text: '可可手剥新鲜葡萄果肉，搭配清冽云峰茶底与醇香芝士，鲜爽润田，果香四溢...',
                  pice: 18
                },
                {
                  img: '../../static/timg.jpg',
                  name: '多肉车厘',
                  text: '草莓混合当季智利车厘子打底，加上手工去籽的车厘子果肉，与四季春茶底，每...',
                  pice: 18
                },
              ]
            },
            {
              name: '茶冰淇淋',
              shop: [
                {
                  img: '../../static/timg.jpg',
                  name: '焦糖海盐冰淇淋',
                  text: '本月限定款，由于冰淇淋易化，下单后需到冰淇淋机出示小票制作领取，敬请...',
                  pice: 7
                },
                {
                  img: '../../static/timg.jpg',
                  name: '茶王冰淇淋',
                  text: '由于冰淇淋易化，下单后需到冰淇淋机出示小票制作领取，敬请谅解。浓醇...',
                  pice: 5
                },
                {
                  img: '../../static/timg.jpg',
                  name: '波波冰淇淋',
                  text: '由于冰淇淋易化，下单后需到冰淇淋机出示小票制作领取，敬请谅解。浓醇...',
                  pice: 16
                },
                {
                  img: '../../static/timg.jpg',
                  name: '芒芒冰淇淋',
                  text: '由于冰淇淋易化，下单后需到冰淇淋机出示小票制作领取，敬请谅解。浓醇...',
                  pice: 18
                },
                {
                  img: '../../static/timg.jpg',
                  name: '草莓冰淇淋',
                  text: '由于冰淇淋易化，下单后需到冰淇淋机出示小票制作领取，敬请谅解。浓醇...',
                  pice: 23
                },
              ]
            },
            {
              name: '莓莓芒果家族',
              shop: [
                {
                  img: '../../static/timg.jpg',
                  name: '芝芝霉霉',
                  text: '选定定制草莓搭配绿研茶底新鲜现打，如选择甜菊糖，遇酸性水果会产生泡沫，...',
                  pice: 30
                },
                {
                  img: '../../static/timg.jpg',
                  name: '多肉霉霉',
                  text: '霉霉融入丰富果肉，搭配醇香芝士与新奇脆波波，口感饱满多汁，霉香满溢。标...',
                  pice: 32
                },
                {
                  img: '../../static/timg.jpg',
                  name: '芝芝霉果',
                  text: '选用能量满满的蓝莓浆果与新鲜草莓制成的冰沙，不可去冰。(默认含芝士)...',
                  pice: 33
                },
                {
                  img: '../../static/timg.jpg',
                  name: '冰淇淋芒芒',
                  text: '芒芒遇上软心香草冰淇淋球，口感绵密顺滑，犹如舌尖surfing...',
                  pice: 28
                },
                {
                  img: '../../static/timg.jpg',
                  name: '芝芝芒芒',
                  text: '选用当季的芒果新鲜现制，搭配绿研茶底，清新爽口，每日新鲜供应...',
                  pice: 30
                },
              ]
            }
          ]
        },
        scrollY: 0,
        listHeight: [],
        path: '/Scroll'
      }
    },
    methods: {
      _initScroll() {
        this.left = new Bscroll(this.$refs.left, {
          click: true
        })
        this.right = new Bscroll(this.$refs.right, {
          probeType: 3       //时时获取滚动高度
        })
        this.right.on('scroll',(pos) => {
          console.log(Math.abs(Math.round(pos.y)))
          this.scrollY = Math.abs(Math.round(pos.y))
        })
      },
      getHeight() {
        let lis = this.$refs.li;
        let height = 0;
        for(let i = 0; i < lis.length; i++) {
          height += lis[i].clientHeight;
          this.listHeight.push(height);
        }
        console.log(this.listHeight)
      },
      selectClass(event) {
        console.log(event)
        if (!event._constructed) {
          return
        } else {
          let index;
          if (event.target.nodeName.toLowerCase() === 'li') {     
            index = parseInt(event.target.dataset.index);   //获li 当前的索引
          }
          let rightItems = this.$refs.li;
          let el = rightItems[index];
          this.right.scrollToElement(el,300)
        }
      }
    },
    computed: {
      currentIndex() {
        if (this.scrollY >= this.listHeight[this.listHeight.length-1]) {
          return this.listHeight.length -1
        }
        for(let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i+1]
          if ((this.scrollY > height1 && this.scrollY <= height2) || !height1 ) {
            return i+1;
          }
        }
        return 0;
      }
    },
    mounted () {
      this.$nextTick(() => {
        this._initScroll()
        this.getHeight()
      })
    }
  }
</script>
<style scoped>
    .home{
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .content{
      flex: 1;
      font-size: 14px;
      display: flex;
      overflow: hidden;
    }
    .content-left{
      flex: 1;
      background: #F5FFFA;
    }
    .content-left ul li{
      padding:0 .8rem;
      margin: .5rem 0;
    }
    .content-right{
      flex: 3
    }
    .content-right ul li{
      padding:0 .8rem;
      margin: .5rem 0;
      
    }
    .li-title{
      margin-bottom: .4rem;
    }
    .li-content{
      font-size: 12px;
      display: flex;
    }
   
    .li-content-img{
      width: 10rem;
      height: 5rem;
    }
    dt{
      font-size: 14px;
    }
    .text{
      overflow: hidden;
      text-overflow:ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin: .5rem 0;
    }
    .pice{
      color: lightcoral;
      font-size: 16px;
    }
    .heigColor{
      color: red;
    }
</style>