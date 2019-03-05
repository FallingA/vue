<template>
    <div>
        <my-scroll class="wrapper" :style="{'height':Fheight}">
            <div class="p-box">
                <header class="header">
                    <div class="h-top">
                        <a href="#" class="h-left">
                        </a>
            
                        <div class="h-center">
                            <h3>余生还要走多久。</h3>
                            <span></span>
                        </div>
                        <div class="h-right">
                            <a href="#"></a>
                            <a href="#"></a>
                        </div>
                    </div>
                    <ul class="h-bottom">
                        <li>
                            <a href="#">
                                <span>18</span>
                                <span>收藏夹</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>15</span>
                                <span>关注店铺</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>6</span>
                                <span>足迹</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>10</span>
                                <span>红包</span>
                            </a>
                        </li>
                    </ul>
                </header>
                <div class="p-main">
                    <!-- 88会员开始 -->
                    <div class="member">
                        <a class="member-left">
                            <div>
                            <img src="./images/TB1uUPQff9TBuNjy0FcXXbeiFXa-212-42.png">
                            </div>
                            <span>淘气值 566</span>
                        </a>
                        <div class="member-center">
                            <span>花小积分 兑大权益</span>
                            <a href="#">进入我的会员中心</a>
                        </div>

                    </div>
                    <!-- 88会员结束 -->
                    <!--  -->
                    <div class="indent">
                        <div class="i-title">
                            <h3>我的订单</h3>
                            <span>查看全部订单</span>
                        </div>
                        <ul class="i-list">
                            <li>
                                <a href="#">
                                    <img src="./images/TB16GolmKuSBuNjy1XcXXcYjFXa-87-87.png">
                                    <span>待付款</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="./images/TB1cwzgmMmTBuNjy1XbXXaMrVXa-87-87.png">
                                    <span>待发货</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="./images/TB1b3zgmMmTBuNjy1XbXXaMrVXa-87-87.png">
                                    <span>待收货</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="./images/TB1fOKqm_tYBeNjy1XdXXXXyVXa-87-87.png">
                                    <span>评价</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="./images/TB1fMzgmMmTBuNjy1XbXXaMrVXa-87-87.png">
                                    <span>退款/售后</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>

        </my-scroll>
    </div>
</template>

<script>
  //导入滚动条组件
    import MyScroll from '@/components/scroll';
    export default {
        name:'personal',
        components:{
            MyScroll,
        },
        data(){
            return{
                  Fheight:document.documentElement.clientHeight - 50 + 'px',
            }
        }

    }
</script>

<style scoped>
.p-box{
    width: 100%;
    height: 100%;
}
.header{
    width: 100%;
    height: 140px;
    background-color: #FF5000;
    padding: 24px 10px 0;
    background-image: linear-gradient(to right, #FD9126, #FF5000);
}

.h-top{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between
}
.h-left{
    width:49px;/*no*/
    height: 49px;/*no*/
    border-radius: 50%;
    margin-right: 20px;
    display: flex;
   background: url(./images/TB13O4jeKOSBuNjy0FdXXbDnVXa-188-188.png) center;
    background-size: contain;
    border:1px solid #ffffff;
}
.h-center{
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
}
.h-center h3{
    font-size: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 24px;
    white-space: nowrap;
    margin-bottom: 5px;
    font-weight: 700;
    color: rgb(255, 255, 255);
}
.h-center span{
    width: 100%;
    height: 21px;
    background: url(./images/TB1Us_ja7voK1RjSZFNXXcxMVXa-436-63.png) left no-repeat;
    background-size: 145px 100%;
}
.h-right{
    display: flex;
    justify-content: space-around;
}
.h-right a{
    width:20px;
    height: 20px;
    background: url(./images/TB1RP44oQvoK1RjSZFDXXXY3pXa-54-54.png) center;
    background-size: 100% 100%;
}
.h-right a:last-of-type{
     background: url(./images/TB1dbweXwHqK1RjSZFgXXa7JXXa-57-54.png) center;
     background-size: 100% 100%;
     margin-left: 16px;
}

.h-bottom{
    width: 100%;
    height: 50px;
    display: flex;
    margin-top: 10px;
}
.h-bottom li{
    width: 25%;
}
.h-bottom li a{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    justify-content: center;
}
.h-bottom li a span{
    line-height: 22px;
    color: #ffffff
}

.p-main{
    width: 100%;
    height: auto;
    padding: 0px 10px;
}
/* 88会员开始 */
.member{
    width: 100%;
    height: 59px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    background: #fff;
}
.member-left{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
}
.member-left img{
    height: 14px;
    margin-bottom: 5px;
}
.member-left span{
    font-size: 8px;
}
.member-center{
    height: 60%;
    display: flex;
    border-left: 1px solid rgb(238, 238, 238);
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;

}
.member-center a{
   margin-top: 10px 
}
/* 88会员结束 */
/* 待收货待付款 */
.indent{
    width:100%;
    margin-top: 10px;
    height: 120px;
    border-radius: 12px;
    background: #fff;
}
.i-title{
    width: 100%;
    display: flex;
    line-height: 37px;
    padding: 0px 6px;
    /* border-bottom: 1px solid rgb(238, 238, 231); */
    justify-content: space-between
}
.i-title h3{
   color: rgb(51, 51, 51);
   font-weight: bold;
   font-size: 14px;
}
.i-list{
    display: flex;
    width:100%;
    padding-top:16px; 
    border-top: 1px solid rgb(238, 238, 231);
}
.i-list li{
    width: 20%
}
.i-list li a{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center
}
.i-list li a img{
    width: 50%;
    margin-bottom: 4px;
}
/* 待收货待付款结束 */ 


</style>
