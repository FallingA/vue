import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/index.css'
// swrpei插件的css样式
import 'swiper/dist/css/swiper.css'
// 懒加载 组件
import Vuelazyload from 'vue-lazyload';
// 应用组件
Vue.use(Vuelazyload,{
  loading:require("./assets/images/loading.gif")
})

//弹性
import 'lib-flexible'

//es6转 es5 垫片
import 'babel-polyfill';
//这中不用配置jsonp接口  必须安装 vue-jsonp
// import jsonp from 'vue-jsonp';
// Vue.use(jsonp)

// 导入mint-ui 组件
import Mint from 'mint-ui';
Vue.use(Mint)
import 'mint-ui/lib/style.css'

// loading 加载
// Mint.Indicator.open('Loading...');

// http 拦截器
import Axios from 'axios';
Vue.prototype.$axios=Axios;

// request 拦截器
// http 请求的时候
Axios.interceptors.request.use((req)=>{
  Mint.Indicator.open('加载...');
  return req
})
// 请求完之后
Axios.interceptors.response.use(res=>{
  Mint.Indicator.close();
  return res
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
