import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// 优化路由跳转前
// import Register from "@/components/Register"
// import Login from "@/components/Login"
// import Index from "@/components/Index"
// import Home from "@/components/Home/Home"

// 优化前：component: 'Register'
// 优化后：component: () => import('@/components/Register')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/components/Register')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login')
    },
    {
      path: '/',
      name: 'Index',
      component: () => import('@/components/Index'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/components/Home/Home')
        },
        {
          path: '/bookshelf',
          name: 'Bookshelf',
          component: () => import('@/components/bookshelf/Bookshelf')
        }
      ]
    }
  ]
})
