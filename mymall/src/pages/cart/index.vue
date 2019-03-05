<template>
  <div>
    <navbar>
      <h3 slot="left">购物车</h3>
      <span slot="right">管理</span>
    </navbar>
    <!-- 如果没有数据就为 false 就隐藏 -->
    <div class="cart-total" :class="showProduct? 'cart-hidden' : ''">
      <img src="@/assets/icon/pay_pop_img_loading_fail.png">
      <h3>您的购物车中没有商品</h3>
      <h3>&nbsp;&nbsp;&nbsp;请先去挑选心爱的商品吧！</h3>
      <router-link to="/home" class="total-btn">再去逛逛</router-link>
    </div>

    <div class="cart-wrap" :class="showProduct?' ': 'cart-hidden'">
      <div class="cart-account">
        <!-- 店铺描述开始 -->
        <div class="cart-title">
          <div class="tcont">
            <!-- 全选 -->
            <span class="check-icon" @click="qx">
              <img :src="choAll? iconc : iconnot">
            </span>
            <i class="icon"></i>
            <a href="#">天猫旗舰店</a>
          </div>
          <span>编辑</span>
        </div>
        <!-- 店铺描述结束 -->
        <div class="cart-list" v-for="(val,key) in cartList" :key="key">
          <span class="check-icon" @click="choone(key)">
            <img :src="val.isCheck? iconc : iconnot">
          </span>
          <div class="cart-right">
            <a href>
              <img :src="`http:${val.img}`">
            </a>

            <div class="cart-info">
              <div class="cart-top">
                <a href="javascript:void(0)">{{val.title}}</a>
                <i class="iconfont icon-delete" @click="cartdel(val)"></i>
              </div>

              <div class="cart-pay">
                <p class="pay-price">￥
                  <span>{{val.price}}</span>
                </p>
                <div class="pay-btn">
                  <a class="min-btn" @click="redNum(val)">-</a>
                  <!-- <input type="number"> -->
                  <p>{{val.quantity}}</p>
                  <a class="max-btn" @click="addNum(val)">+</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="c-footer">
      <div class="c-f-left">
        <div class="qx">
          <span class="check-icon" @click="qx()">
            <img :src="choAll? iconc : iconnot">
          </span>
          <h3>全选</h3>
        </div>
        <p>合计:
          <span>￥</span>
          <strong>{{this.totalQ.toFixed(2)}}</strong>
        </p>
      </div>
      <div class="c-f-right" @click="subitBth()">结算 ({{this.totanum}})</div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      showProduct: false,
      cartList: [],
      choAll: false, //控制全选
      iconnot: require("@/assets/icon/order_not_checked.png"),
      iconc: require("@/assets/icon/order_checked.png"),
      num: 0,
      totalQ: 0, //总价格
      totanum: 0,
      arr: []
    };
  },
  components: {
    navbar
  },
  created() {
    this.carts();
    if (
      this.$store.state.cart.added == null ||
      this.$store.state.cart.added.length == 0
    ) {
      this.showProduct = false;
    }
  },
  methods: {
    carts() {
      //判断那里面是否有值
      if (this.$store.state.cart.added != null) {
        this.cartList = this.$store.state.cart.added;
        this.showProduct = true;
        this.pd();
        this.num = 0;
      }
    },
    choone(id) {
      //单个点的时候
      this.cartList[id].isCheck = !this.cartList[id].isCheck;
      //单个点的时候 判断是否为一个
      this.pd();
      //总价格
      this.getAllCart();
    },
    qx() {
      //点击全选的时候
      // 如果为真 那么就给他变成 false
      if (this.choAll) {
        for (let item of this.cartList) {
          item.isCheck = false;
        }
        this.choAll = !this.choAll;
      } else {
        for (let item of this.cartList) {
          item.isCheck = true;
        }
        this.choAll = !this.choAll;
      }
      //判断总价
      this.getAllCart();
    },
    pd() {
      for (let val of this.cartList) {
        //判断里面的值为 真吗 如果就num++
        if (val.isCheck == true) {
          this.num++;
        }
        // console.log(this.num)
        //判断是否 num 够里面的长度吗 够的话全选
        if (this.num == this.cartList.length) {
          this.choAll = true;
        } else {
          this.choAll = false;
        }
      }
      this.getAllCart();
      //
      this.num = 0;
    },
    //总价格
    getAllCart() {
      this.totalQ = 0;
      this.totanum = 0;
      for (let val of this.cartList) {
        if (val.isCheck == true) {
          this.totanum += val.quantity;
          this.totalQ += val.price * val.quantity;
        }
      }
    }, //点击加
    addNum(val) {
      let { id, type, quantity } = val;
      quantity++;
      this.$store.dispatch("updateThisCart", {
        id: id,
        type: type,
        quantity: quantity
      });
      this.getAllCart();
    },
    redNum(val) {
      let { id, type, quantity } = val;
      quantity--;
      if (quantity < 1) {
        quantity = 1;
      }
      this.$store.dispatch("updateThisCart", {
        id: id,
        type: type,
        quantity: quantity
      });
      this.getAllCart();
    }, //删除
    cartdel(val) {
      let { id, type, quantity } = val;
      this.$store.dispatch("updateThisCart", {
        id: id,
        type: type,
        quantity: (quantity = 0)
      });
      this.getAllCart();
      if (
        this.$store.state.cart.added == null ||
        this.$store.state.cart.added.length == 0
      ) {
        this.showProduct = false;
      }
    },
    subitBth() {
      //结算
      for (let i = this.cartList.length - 1; i >= 0; i--) {
        if (this.cartList[i].isCheck) {
          let { id, type, quantity } = this.cartList[i];
          this.$store.dispatch("updateThisCart", {
            id: id,
            type: type,
            quantity: (quantity = 0)
          });
        }
        if (
          this.$store.state.cart.added == null ||
          this.$store.state.cart.added.length == 0
        ) {
          this.showProduct = false;
        }
      }
      
      this.getAllCart();
    }
  }
};
</script>

<style scoped>
.cart-hidden {
  display: none;
}
.cart-total {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 20;
  text-align: center;
  font-size: 18px;
  background: rgb(248, 248, 248);
}

.cart-total img {
  width: 58%;
  display: block;
  margin: 0px auto;
}
.cart-total h3 {
  margin-bottom: 3px;
}
.total-btn {
  display: block;
  width: 120px;
  height: 40px;
  margin: 40px auto 0px;
  text-align: center;
  line-height: 40px;
  border-radius: 3px;
  color: #777;
  font-size: 16px;
  border: 1px solid #ddd;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
.navbar {
  display: flex;
  justify-content: space-between;
  height: 40px;
  background: #f60;
  align-items: center;
  color: #fff;
}
.navbar h3 {
  font-size: 18px;
  font-weight: 700;
}
.navbar span {
  font-size: 18px;
}

/* 购物车开始 */
/* 外面大盒子 */
.cart-wrap {
  margin-top: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

/* 店铺描述开始 */
.cart-account {
  width: 100%;
  border-radius: 6px;
  height: auto;
}
.cart-title,
.cart-list {
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0px 5px;
}
.cart-title {
  height: 40px;
  background: #fff;
  border-bottom: 2px solid #f5f5f5;
}
.cart-title .tcont {
  display: flex;
  align-items: center;
  height: 24px;
}
.icon {
  width: 24px;
  height: 24px;
  background: url("./images/icon.png") no-repeat;
  background-size: 24px 24px;
  margin: 0px 6px;
}
.cart-title a {
  color: #000;
  font-size: 14px;
}
.cart-title span {
  font-size: 14px;
}
/* 店铺描述结束 */

.check-icon {
  height: 30px;
  width: 30px;
}
.check-icon img {
  width: 100%;
  height: 100%;
}
/* 商品描述开始 */
.cart-list {
  margin-top: 3px;
  border-radius: 3px;
  width: 100%;
  height: 140px;
  background: #fff;
}

.cart-right {
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.cart-right img {
  height: 120px;
}
.cart-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
}
.cart-top {
  display: flex;
  justify-content: space-between;
}
.cart-top .iconfont {
  margin-left: 10px;
  color: #ccc;
}
.cart-info a {
  font-size: 14px;
}
.cart-info .cart-pay {
  display: flex;
  height: 30px;
  padding-right: 6px;
  align-items: flex-end;
  justify-content: space-between;
}
.cart-info .pay-price {
  color: #f60;
}

.pay-btn {
  display: flex;
  width: 30%;
  height: 26px;
  align-items: center;
  text-align: center;
}
.pay-btn a {
  width: 25%;
  font-size: 18px;
}
.pay-btn p {
  display: flex;
  flex: 1;
  width: 50%;
  font-size: 10px;
  justify-content: center;
  text-align: center;
}

.c-footer {
  position: fixed;
  bottom: 50px;
  width: 100%;
  /* max-width: 640px;
  min-width: 320px; */
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #fff;
}
.c-f-left {
  width: 70%;
  display: flex;
  justify-content: space-between;
  padding: 0px 5px;
  align-items: center;
}
.qx {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.qx input {
  margin-right: 4px;
}
.c-f-left p {
  font-size: 14px;
  padding: 0px 3px;
  color: #000;
}
.c-f-left span,
.c-f-left strong {
  color: #f60;
}
.c-f-left strong {
  font-size: 16px;
}
.c-f-right {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
  background: #f60;
}
</style>