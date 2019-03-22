<template>
    <div class="vx">
        <v-header :titles ='titles' :url='path'></v-header>
        <div class="content" @click='falg = true'>
            <div v-for='(item, index) in pass' :key='index' class='gird'>
              <div v-if='item.content' class="bg"></div>
            </div>
        </div>
        <div class="bottomImport">
            <div v-for='(ite, inde) in imports' :key='inde' @click='clickNum(ite)'>{{ite}}</div>
            <div @click='delNum'>撤回</div>
        </div>
    </div>
</template>
<script>
  import Header from "../components/header.vue";
  export default{
    components: {
      'v-header': Header
    },
    data() {
      return {
        titles: '仿微信支付页面',
        path: '/Sides',
        falg: false,
        pass: [
          {
            content: ''
          },
          {
            content: ''
          },
          {
            content: ''
          },
          {
            content: ''
          },
          {
            content: ''
          },
          {
            content: ''
          }
        ],
        imports: ['1','2','3','4','5','6','7','8','9','', '0'],
        passWord: ''
      }
    },
    methods: {
      clickNum(ite, index) {
        if (index == 9) {
          return;
        }
        for(let i = 0; i < this.pass.length; i++) {
          if (!this.pass[i].content) {
            this.pass[i].content = ite
            this.passWord += ite
            if (this.passWord.length == 6) {
              setTimeout(() => {
                alert(this.passWord)
              }, 50)
            }
            return;
          }
        }
      },
      delNum() {
        if (this.numLength.length == 0) {
          return 
        }
        for(let i = this.numLength.length-1; i < this.numLength.length; i--) {
          this.pass[i].content = ''
          this.passWord = this.passWord.substring(0, this.passWord.length - 1)
          return;
        }
      }
    },
    computed: {
      numLength() {
        let ary = [];
        for(let i = 0; i < this.pass.length; i++) {
          if (this.pass[i].content != '') {
            ary.push(this.pass[i].content)
          }
        }
        return ary;
      }
    }
  }
</script>
<style scoped>
  .vx{
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .content{
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
  .gird{
    border: 1px solid #cccccc;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bg{
    border-radius: 50%;
    background: #ccc;
    width: 20px;
    height: 20px;;
  }
  .bottomImport{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    position: fixed;
    bottom: 0;
  }
  .bottomImport div{
    width: 33%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
</style>