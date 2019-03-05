<template>
    <div class="recommend">
        <h3 class="recommend-title"><span>热卖</span></h3>
        <!-- 单击的时候吧 key 值传过去 -->
        <ul class="recommend-list">
            <li v-for="(val,key) in productList" 
            :key="key" 
            
            @click="findProduct(key)">
                <router-link :to="{name:'product',params:{id:val.baseinfo.itemId,imgurl:val.baseinfo.picUrl,actPrice:val.price.actPrice}}">
                    <img v-lazy="`http:${val.baseinfo.picUrl}`">
                    <p class="r-title">{{val.name.shortName}}</p>
                    <p class="r-peo"><del>{{val.price.origPrice}} {{key}}</del></p>
                    <p class="r-pro"><strong>￥{{val.price.actPrice}}</strong><span>已售{{val.remind.soldCount}}</span></p>
                </router-link>
            </li>
            
        </ul>
    </div>
</template>

<script>
import { getRecommend } from "@/api/productList.js";
    export default {
        name:'productList',
        data(){
            return{
                productList:[],
                page:1,
                totalPage:1,
                obj:{}
                // totalPage是一个有多少页
            }
        },
        created(){
                this.getProductList();
        },
        updated(){
            //数据更新完之后  在传值
            // this.getProductList();
            this.obj ={
                productList:this.productList,
                page:this.page,
                totalPage:this.totalPage,        
            };
            this.$emit("loaded",this.obj)
        },
        methods:{
            getProductList(){
                
                // 引用了main 里面设置的公用的 axios
                // this.$axios.defaults.baseURL="http://localhost:8081";
                //axios
                // 需要在config index.js 里面设置跨域代理
                /*
                    跨域代理配置
                    从本地服务器端口号  http://localhost:8080 代理到
                    你的api接口地址
                    /api --> https://ju.taobao.com
                */ 
                // return this.$axios
                // .get("/api/json/tg/ajaxGetItemsV2.json",{
                //     params:{
                //         // 以后做分页用的
                //         page:this.page,
                //         psize:20,
                //         type:0,
                //         frontCatId:'' 
                //     }
                // })
                 getRecommend(this.page)
                 //看前面 main.js 下面这种有方法
                //  this.$jsonp('https://ju.taobao.com/json/tg/ajaxGetItemsV2.json',{
                //     page:this.page,
                //     psize:20,
                //     type:0,
                //     frontCatId:''
                // })
                .then(res=>{
                    if(res.code == '200'){
                        this.page++;
                        this.totalPage = res.totalPage;
                        this.productList = this.productList.concat(res.itemList)
                        // 将商品列表保存 vueX中
                        this.$store.dispatch("addGoods", this.productList)

                    }
                })
                .catch(e=>{
                    console.log(e)
                })
            },
            findProduct(id){
                //上面点击的那个  就传那个里面的商品数据
                // this.goodList 是下面 计算属性   == 上面传过去的 全部数据
                this.$store.dispatch('productInfo',this.goodList[id])
            }
            
        },
        computed:{
            goodList(){
                return this.$store.state.goodsList;
            }
        }
    }
</script>

<style scoped>
.recommend-title{
    position: relative;
    height: 20px;
    border-bottom: 1px solid #ccc;
}
.recommend-title span{
    position: absolute;
    top: 10px;
    left: 50%;
    margin-left: -16px;
}
.recommend-list{
    margin-top:10px; 
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.recommend-list li{
    width: 49%;
    height: auto;
    border: 1px solid #ccc;
    margin-bottom: 5px;
    background: #fff
}
.recommend-list li img{
    width: 100%;
    height: 100%;
}
/* 描述 */
.recommend-list li .r-title{
    padding: 5px 3px;
    font-size: 14px;
    white-space : nowrap;
    overflow:hidden; 
    text-overflow:ellipsis;
}
/* 之前价格 */
.recommend-list li .r-peo{
    font-size: 12px; 
    padding: 5px 3px;
}
/* 价格已售多少 */
.recommend-list li .r-pro{
    padding: 5px 3px;
    display: flex;
    justify-content: space-between;
}
.recommend-list li .r-pro strong{
    font-size: 16px;
    color: red
}
.recommend-list li .r-pro span{
    font-size: 12px;

}

</style>