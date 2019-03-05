<template>
   <div id="app" class="g-container">
    <div class="g-view-container">
      <keep-alive>
      <transition name="fold-left">
      <!-- 显示不同组件页面 -->
      <router-view></router-view>
      </transition>
      </keep-alive>
    </div>
    <div class="g-footer-container">
      <!-- 底部导航列表超链接 -->
      <tab-bar/>
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/tabbar'
export default {
  data(){
    return {
      transitionName:'fold-left'
    }
    
  },
  created(){
    this.$store.state.cart.added = JSON.parse(window.localStorage.getItem('cart'))
  },
  watch:{
    $route(to,from){
      /*to、from是最基本的路由对象，分别表示从(from)某个页面跳转到(to)另一个页面,
      to.path（表示要跳转到的路由地址），from.path同理。*/
      const routerDeep=[
        "/home",
        "/categroy",
        "/cart",
        "/personal",
        "/product"
      ];
      const fromPath = routerDeep.indexOf(from.path);
      const toPath = routerDeep.indexOf(to.path);
      this.transitionName = fromPath>toPath ? "fold-left" : "fold-right";
    }
  },
  components:{
    TabBar
  }

}
</script>

<style socped>
.fold-left-enter-active {
  animation-name: fold-left-in;
  animation-duration: 0.3s;
}
.fold-left-leave-active {
  animation-name: fold-left-out;
  animation-duration: 0.3s;
}
@keyframes fold-left-in {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    /* visibility: visible; */
  }
  /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-left-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    /* visibility: hidden; */
  }
}

.fold-right-enter-active {
  animation-name: fold-right-in;
  animation-duration: 0.3s;
}
.fold-right-leave-active {
  animation-name: fold-right-out;
  animation-duration: 0.3s;
}
@keyframes fold-right-in {
  0% {
    width: 100%;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    /* visibility: visible; */
  }
  /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
  100% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-right-out {
  0% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
  100% {
    width: 100%;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    /* visibility: hidden; */
  }
}
</style>
