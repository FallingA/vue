// 导入方法名称
import * as types from './mutation-types.js'
export default {
  //添加全部数据
  [types.ADDGOODS](state, value) {
    state.goodsList = value;
  },
  // 你查看的那个数据
  [types.PRODUCTINFO](state, value) {
    state.productInfo = value
  }
}
