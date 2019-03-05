<template>
    <div>
        <navbar>
            <i class="iconfont icon-back" slot="left" @click="goBack()"></i>
            <div slot="center" class="navbar-center">商品详情</div>
            <i class="iconfont icon-msg" slot="right"></i>
           
        </navbar>
        <div class="product">
            <!-- 商品图片开始 -->
            <div class="product-img">
            
                <!-- {{this.product}} 下面计算属性  -->
                <img :src="`http:${this.product.baseinfo.picUrl}`">
            </div>
            <!-- 产品价格 现时秒杀 -->
            <div class="p-center">
                <div class="p-left">
                    <p class="p-price">￥<strong>{{this.product.price.actPrice}}</strong>.00</p>
                    <div class="p-oldprice">
                        <del>{{this.product.price.origPrice}}</del>
                        <p>京东秒杀</p>
                    </div>

                </div>
                <div class="p-right">
                    <span>距秒杀结束还剩</span>
                    <p>
                        <span>07</span>
                        :
                        <span>10</span>
                        :
                        <span>10</span>
                    </p>
                </div>
            </div>
            <!-- 产品价格 现时秒杀结束 -->
            <div>

            </div>
        </div>

        <div class="p-footer">
            <span @click="addToCart">加入购物车</span>
            <span>立即购买</span>
        </div>
    </div>
    
</template>

<script>
import navbar from '@/components/navbar';
    export default {
        name:'product',
        data(){
            return{
                buyNum:1
            }
        },
        components:{
            navbar
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            },
            addToCart() {
             //  添加  商品信息到购物车  ,在本地存储中将你添加的商品存储
                let productInfo = {
                    // this.$store.state.productInfo;
                    id: this.$route.params.id, //路由跳转的时候 带过来的id 
                    img: this.product.baseinfo.picUrl,//图片
                    title: this.product.name.shortName,//名字
                    type: this.$route.params.id, //类型：如果是同一个商品增加数量,不是同一个商品添加到购物车
                    quantity: this.buyNum, // 商品数量
                    price: this.product.price.actPrice,//价格
                    inventory: this.product.baseinfo.stock, // stock 库存
                    isCheck: true //
                };
                //数据传到 购物车
                this.$store.dispatch("addToCart", productInfo);
                console.log("添加到购物车成功!");
            }
        },
        computed: {
            // 获得 vueX 中一个商品的详细信息
            product() {
            return this.$store.state.productInfo;
            }
        }
    }

</script>

<style scoped>

/*  navbar开始 */
.navbar{
    display: flex;
    justify-content: space-between;
    height: 40px;
    background: #f60;
    background: linear-gradient(#eee, #ddd);
    border-bottom: 1px solid #ddd;
    border-radius: 4px;
    align-items: center
}
.navbar .iconfont{
    font-size: 18px;
}
.navbar-center{
    text-align: center;
    font-size: 16px;
}
/*  navbar结束 */


/*商品图片开始*/
.product-img{
    width: 100%
}
.product-img img{
    width: 100%
}
/* 商品图片结束 */
.p-center{
    width: 100%;
    height: 50px;
    display: flex;
    background: #fff;
    background: linear-gradient(90deg, #ff7f4e, #ff3131);
}

.p-left{
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    
}
/* 现价 */
.p-price strong{
    font-size: 20px;
   
}
/* 原价 */
.p-oldprice{
    padding: 0px 6px;
    font-size: 14px;
}
/* 现时秒杀 */
.p-right{
    width: 30%;
    display: flex;
    flex-direction: column;
    background: #ccc;
    color: #000;
    justify-content: center;
    align-items: center;
    font-size: 13px;
}
.p-right p{
    padding: 4px;
    color:#f60 
}




.p-footer{
    width:100%;
    display: flex;
    height: 40px;
    position: absolute;
    bottom: 50px;
    background: #000
}
.p-footer span{
    width: 50%;
    color: #fff;
    background-color: #FF9500;
    height: 100%;
    text-align: center;
    line-height: 40px;
}
.p-footer span:last-of-type{
     background-color: #FF0036;
}


</style>