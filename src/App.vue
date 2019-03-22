<template>
  <div id="app">
    <transition :name="transitionName">
        <router-view class="Router"></router-view>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-right'
    }
  },
  watch: {
    '$route'(to, from) {
      this.$store.commit("watchRoute", to.path);
      let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
　　　if(isBack) {
　　　　this.transitionName = 'slide-right'
　　　} else {
　　　　this.transitionName = 'slide-left'
　　　}
　　  this.$router.isBack = false
    }
  }
}
</script>

<style scoped>
  #app{
    height:100%;
  }
  .Router {
     width: 100%;
     height: 100%;
     position: absolute;
     transition: all .8s;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
      -webkit-transform: translate(100%, 0);
      transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
      -webkit-transform: translate(-100%, 0);
      transform: translate(-100% 0);
  }
</style>
