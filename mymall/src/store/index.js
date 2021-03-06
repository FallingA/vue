import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

import cart from './modules/cart'

Vue.use(Vuex);

// 存放数据
const state = {
 // 商品列表 ： 20 40 ...数据
 goodsList: [],
 // 一个商品的信息
 productInfo: {}

}
export default new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {
      cart
    }
})
  