<template>
    <div>
        <my-scroll class="wrapper" 
        :pullup="pullup" 
        :listenScroll="listenScroll" 
        @scroll="_scroll" 
        @pullup="_pullup"
        ref="scroll" 
        :style="{'height':Fheight}">
        <!-- navbar开始  -->
        <div class="content">
        <navbar>
            <i class="iconfont icon-scan" slot="left"></i>
            <div class="nav-search-box" slot="center">
                <i class="iconfont icon-search"></i>
                <input class="nav-search" type="text" placeholder="开学季5折优惠">
                <i class="iconfont icon-close"></i>
            </div>
            <i class="iconfont icon-msg" slot="right"></i>
        </navbar>
        <!-- navbar结束 -->
        <!-- 轮播图开始 -->
        <swiper :options="swiperOption">
            <swiper-slide v-for="(val,key) in sliders" :key="key">
                <a :href="val.imgUrl">
                    <img :src="val.imgName">
                </a>

            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!-- 轮播图结束 -->
        <!-- 八大品牌开始 -->
        <nav class="nav">
            <ul>
                <li v-for="(val,key) in navs" :key="key">
                    <a href="#">
                        <img :src="val.navUrl">
                        <span>{{val.title}}</span>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- 八大品牌结束 -->
        <!-- 产品展示 -->
        <product-list @loaded="getProductData" ref="productList"></product-list>
        <!-- 产品结束  -->
        </div>
    </my-scroll>
    <me-backtop :visible="isBacktopVisible" @backtop="backTop"></me-backtop>
    </div>
</template>

<script>
    //导入navbar 组件 
    import navbar from "@/components/navbar"
    // 导入 swiper 组件  swiper 是外面那个大盒子  swiperSlide是那个幻灯片
    import {swiper,swiperSlide} from "vue-awesome-swiper";

    // 导入商品组件
    import ProductList from './productList.vue';
    //导入滚动条组件
    import MyScroll from '@/components/scroll';
    //返回顶部组件
    import MeBacktop from '@/components/backtop';

    export default {
        name:'home',
        components:{
            navbar,
            swiper,
            swiperSlide,
            ProductList,
            MyScroll,
            MeBacktop
        },
        data(){
            return {
                listenScroll:true,
                isBacktopVisible: false,
                productData:[],//productList传过来的数据
                page:1,
                totalPage:0,
                pulldown: true,
                pullup: true,
                Fheight:document.documentElement.clientHeight - 50 + 'px',
                num:1,
                sliders:[
                    {
                        imgUrl: 'http://www.baidu.com',
                        imgName: require("./images/1.jpg")
                    },
                    {
                        imgUrl:'http://www.baidu.com',
                        imgName:require("./images/2.jpg")
                    },
                    {
                        imgUrl:'http://www.baidu.com',
                        imgName:require("./images/3.jpg")
                    },
                ],
                //所有的参数同 swiper 官方 api 参数
                swiperOption:{
                    // 方向
                    direction:'horizontal',
                    // 自动轮播
                    loop:true,
                    // 分页
                    pagination:{
                        el:'.swiper-pagination',
                        // 点击下面 可以切换那个幻灯片
                        clickable: true
                    },
                    // 换图多长时间
                    autoplay:{
                        delay:2500,
                        // 
                        disableOnteraction:false
                    }
                },
                navs:[
                    {
                        navUrl:require("./images/nav-item-1.png"),
                        title:'热卖'
                    },
                    {
                        navUrl:require("./images/nav-item-2.png"),
                        title:'热卖'
                    },
                    {
                        navUrl:require("./images/nav-item-3.png"),
                        title:'热卖'
                    },
                    {
                        navUrl:require("./images/nav-item-4.png"),
                        title:'热卖'
                    },
                    {
                        navUrl:require("./images/nav-item-5.png"),
                        title:'热卖'
                    },
                    {
                        navUrl:require("./images/nav-item-6.png"),
                        title:'热卖'
                    },
                    {
                        navUrl:require("./images/nav-item-7.png"),
                        title:'热卖'
                    },
                    {
                        navUrl:require("./images/nav-item-8.png"),
                        title:'热卖'
                    }
                ]

            }

        },
        methods:{
            getProductData(obj){
                this.$refs.scroll && this.$refs.scroll.refresh();
                this.productData =obj.ProductList;
                this.page= obj.page;
                this.totalPage = obj.totalPage
            },
            _pullup() {
                this.$refs.scroll && this.$refs.scroll.refresh();
                console.log("正在上拉");
                if (this.page > this.totalPage) {
                    console.log("没有更多了");
                    this.pullup = false;
                    return false;
                }
                this.num++;
                console.log(this.num)
                this.$refs.productList.getProductList(); 
                
                //重要 调用组件product-list中 update() 实现ajax数据分页
            },
            backTop(){
                this.$refs.scroll && this.$refs.scroll.scrollTo(0,0)
            },
            _scroll(pos){
                console.log(pos.y)
                // if(-pos.y<200){
                //     this.isBacktopVisible=false
                // }else{
                //      this.isBacktopVisible=true
                // }
                this.isBacktopVisible = pos.y < 0  && -pos.y > 200

            }

        }
    }
</script>

<style scoped>
/*  navbar开始 */
.navbar{
    display: flex;
    justify-content: space-between;
    height: 50px;
    background: #f60;
    align-items: center
}
.navbar .iconfont{
    font-size: 28px;
    color: #fff;
}
.nav-search-box{
    background: #fff;
    display: flex;
    align-items: center;
    border-radius: 20px;
    width: 100%;
    padding:6px 7px;
    justify-content: space-around
}
.nav-search-box .iconfont{
    color: #ccc;
    font-size: 22px;
}
.nav-search{
    flex: 1;
    line-height: 1.5;
    background: none
}
/*  navbar结束 */
/* 轮播开始 */
.swiper-container{
    width: 100%;
    max-height: 220px;
    height: auto;
    min-height: 130px;
    overflow: hidden
}
.swiper-container img{
    width: 100%;
    height: 100%;
}
/* 轮播结束 */

/* 八大金刚开始 */
.nav{
    padding: 3px 0px;
    width: 100%;
    background: #fff
}
.nav ul{
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
      
}
.nav ul li{
    width: 25%;
}
.nav ul li a{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
}
.nav ul li span{
    margin: 4px 0px;
    font-size:16px
}
.nav ul li img{
    width:60%
}
/* 八大金刚结束 */


.wrapper{
    width: 100%;
    height: 1000px;

}
.content{
    height: auto;
}


</style>