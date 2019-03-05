import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import cart from '@/pages/cart'
import personal from '@/pages/personal'
import category from '@/pages/category'
import product from '@/pages/product'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path:'/cart',
      name:'cart',
      component:cart
    },
    {
      path:'/personal',
      name:'personal',
      component:personal
    },
    {
      path:'/category',
      name:'category',
      component:category
    },
    {
      path:'*',  
      redirect:'/home'
    },
    {
      path:'/product/:id/:imgurl',
      name:'product',
      component:product
    }
  ]
})
