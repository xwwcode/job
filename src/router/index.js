import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Scroll from '@/pages/scroll'
import Sides from '@/pages/sides'
import Swiper from '@/pages/Swiper'
import Login from '@/pages/login'
import pullDown from '@/pages/pullDown'
Vue.use(Router)
Router.prototype.goBack = function() {
  this.isBack = true;
  window.history.go(-1)
}
let route= []
if (window.localStorage.getItem('userName')) {
  route = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Scroll',
      name: 'Scroll',
      component: Scroll
    },
    {
      path: '/Sides',
      name: 'Sides',
      component: Sides
    },
    {
      path: '/Swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/pullDown',
      name: 'pullDown',
      component: pullDown
    }
  ]
} else {
  route = [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Scroll',
      name: 'Scroll',
      component: Scroll
    },
    {
      path: '/Sides',
      name: 'Sides',
      component: Sides
    },
    {
      path: '/Swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/pullDown',
      name: 'pullDown',
      component: pullDown
    }
  ]
}

export default new Router({
  mode: 'history',
  routes: route
})
