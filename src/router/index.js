import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@views/home/Home.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('@views/category/Category.vue'),
      children: [{
        name: "ListNav",
        path: '/category/:id',
        component: () => import('@views/category/Category.vue')
      }, {
        name: "ListContent",
        path: '/category/:id',
        component: () => import('@views/category/Category.vue')
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@views/login/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@views/register/Register.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@views/mine/Mine.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@views/cart/Cart.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@views/detail/Detail.vue')
    },
  ]
})
