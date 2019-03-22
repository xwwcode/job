<template>
  <div class="login">
      <v-header :titles ='titles' :url='path'></v-header>
      <div class="content">
        <div style='perspective= "500"'>
            <div class="box" :class='animateIs == true ? "animateIn" : "animateOut"' v-if='falg'>
                <div class="title">账号登录</div>
                <div class="user">
                  <div>
                    <label>
                      <span>
                        <img src="../../static/name.png" alt="">
                      </span>
                      <input type="text" v-model='user'>
                    </label>
                  </div>
                  <div>
                    <label>
                      <span>
                        <img src="../../static/password.png" alt="">
                      </span>
                      <input type="password" v-model='pass'>
                    </label>
                  </div>
                  <div class="alertMessage" v-if='alertIs'>
                    用户名或者密码有误
                  </div>
                  <div class="alertMessage" v-else></div>
                </div>
                <div class="logins">
                  <div class="logins-left" @click='login'>登录</div>
                  <div>忘记密码?</div>
                </div>
            </div>
            <div class="box" :class='animateIs == true ? "animateIn" : "animateOut"' v-else>
                <div class="title">欢迎回来</div>
                <div class="user">
                  <router-link to="/Home">前往首页</router-link>
                </div>
            </div>
        </div>
          
      </div>
      <div class="loading" ref='load'>
        <div class="message">认证中...</div>
        <v-loding></v-loding>
      </div>
  </div>
    
</template>
<script>
  import Header from "../components/header.vue";
  import Loding from '../components/loding.vue'
  export default{
    components: {
      'v-header': Header,
      'v-loding': Loding
    },
    data() {
      return {
        titles: '登录页面',
        path: '/',
        animateIs: false,
        user: '',
        pass: '',
        alertIs: false,
        falg: true
      }
    },
    methods: {
      login() {
        if (!this.user || !this.pass) {
          this.alertIs = true;
          return
        } else {
          this.alertIs = false;
        }
        this.animateIs = true;
        setTimeout(() => {
          this.$refs.load.style.left = 0 +'px';
          setTimeout(() => {
            this.$refs.load.style.left = -200 +'%';
            this.animateIs = false;
            this.falg = false;
            this.messagePush()
          }, 2000)
        }, 600);
      },
      messagePush() {
        if (this.user) {
          window.localStorage.setItem(`userName`, JSON.parse(this.user));
        }
      }
    }
  }
</script>
<style scoped>
  .login{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .content{
    position: relative;
    height: 100%;
    background: linear-gradient(135deg, #EA5C54 0%, #bb6dec 100%);
  }
  .box{
    background: linear-gradient(45deg, #35394a 0%, #1f222e 100%);
    width: 88%;
    height: 40rem;
    position: absolute;
    left:0;
    right: 0;
    top: 0;
    bottom: 0;
    margin:auto;
    transition: all 0.4s;
    transform-origin: bottom;
    -o-transform-origin: bottom;
    -webkit-transform-origin: bottom;
  }
  .animateIn{
    animation: animateIn .5s linear 0s both;
  }
  @keyframes animateIn{
    0% {
      transform: rotateX(0); ;
      -webkit-transform: rotateX(0);
      -moz-transform: rotateX(0); 
    }
    20%{
      transform:perspective(800px) rotateX(-10deg);
    }
    100% {
      transform:perspective(800px) rotateX(80deg);
      -webkit-transform:perspective(800px) rotateX(80deg);
      -moz-transform:perspective(800px) rotateX(80deg);
      opacity: .4;
    }
  }
  .animateOut{
    animation: animateOut .5s linear 0s both;
  }
  @keyframes animateOut{
    0% {
      transform:perspective(800px) rotateX(80deg);
      -webkit-transform:perspective(800px) rotateX(80deg);
      -moz-transform:perspective(800px) rotateX(80deg);
    }
    100% {
      transform: rotateX(0); ;
      -webkit-transform: rotateX(0);
      -moz-transform: rotateX(0); 
      opacity: 1;
    }
  }
  .title{
    color: #fff;
    font-size: 20px;
    padding: 4rem 0 0 2rem;
  }
  .user{
    margin-top: 6rem;
  }
  .user a {
    font-size: 14px;
    color: #fff;
    margin-left: 4rem;
  }
  .user div{
    height: 4rem;
    display: flex;
    align-items: center;
    border-top: 2px solid #393d52;
    border-bottom: 2px solid #393d52;
  }
  .user div label{
    display: inline-block;
    padding: 0 4rem;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .user div label span img{
    width: 2rem;

  }
  .user div label input{
    margin-left: 2rem;
  }
  .logins{
    width: 100%;
    display: flex;
    margin-top: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .logins-left{
    border-radius: 50px;
    background: transparent;
    padding: 10px 50px;
    border: 2px solid #DC6180;
    color: #DC6180;
    text-transform: uppercase;
    font-size: 11px;
    -webkit-transition-property: background,color;
    transition-property: background,color;
    -webkit-transition-duration: .2s;
    transition-duration: .2s;
  }
  .logins-left:hover{
    color: #fff;
  }
  .loading{
    position: absolute;
    left:-200%;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: linear-gradient(45deg, #35394a 0%, #1f222e 100%);
    width: 80%;
    height: 8rem;
    display: flex;
    align-items: center;
    font-size: 18px;
    color: rgba(255, 255, 255, .4);
    transition: all .2s;
  }
  .message{
    margin: 0 auto;
  }
  .alertMessage{
    border: none !important;
    font-size: 13px;
    color: red;
    padding-left: 4rem;
  }
</style>