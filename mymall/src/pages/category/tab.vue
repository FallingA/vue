<template>
    <me-scroll class="wrapper" :style="{'height':Fheight}">
        <ul class="content tab">
            <li class="tab-list"
                v-for="(val,key) in items" :key="key"
                :class="{'tab-list-active': val.id === curId}"
                @click="switchTab(val.id)"
                >
                {{val.name}}
            </li>
        </ul>
    </me-scroll>
</template>

<script>
import MeScroll from '@/components/scroll';
    export default {
        name:'tab',
        components:{
            MeScroll
        },
        data(){
            return{
                 Fheight:document.documentElement.clientHeight - 90 + 'px',
                 curId:''
            }
        },
        created(){
            this.init();
            this.switchTab(this.items[0].id)
        },
        methods:{
            init() {
            this.items = [
                {
                name: "热门推荐",
                id: "WQR2006"
                },
                {
                name: "淘淘超市",
                id: "WQ1968"
                },
                {
                name: "国际名牌",
                id: "WQ1969"
                },
                {
                name: "奢侈品",
                id: "WQ1970"
                },
                {
                name: "全球购",
                id: "WQ1971"
                },
                {
                name: "男装",
                id: "WQ1972"
                },
                {
                name: "女装",
                id: "WQ1973"
                },
                {
                name: "男鞋",
                id: "WQ1974"
                },
                {
                name: "女鞋",
                id: "WQ1975"
                },
                {
                name: "内衣配饰",
                id: "WQ1976"
                },
                {
                name: "箱包手袋",
                id: "WQ1977"
                },
                {
                name: "美妆个护",
                id: "WQ1978"
                },
                {
                name: "钟表珠宝",
                id: "WQ1979"
                },
                {
                name: "手机数码",
                id: "WQ1980"
                },
                {
                name: "电脑办公",
                id: "WQ1981"
                },
                {
                name: "家用电器",
                id: "WQ1982"
                },
                {
                name: "食品生鲜",
                id: "WQ1983"
                },
                {
                name: "酒水饮料",
                id: "WQ1984"
                },
                {
                name: "母婴童鞋",
                id: "WQ1985"
                },
                {
                name: "玩具乐器",
                id: "WQ1986"
                },
                {
                name: "医药保健",
                id: "WQ1987"
                },
                {
                name: "计生情趣",
                id: "WQ1988"
                },
                {
                name: "运动户外",
                id: "WQ1989"
                },
                {
                name: "汽车用品",
                id: "WQ1990"
                },
                {
                name: "家居厨具",
                id: "WQ1991"
                },
                {
                name: "家具家装",
                id: "WQ1992"
                },
                {
                name: "礼品鲜花",
                id: "WQ1993"
                },
                {
                name: "宠物生活",
                id: "WQ1994"
                },
                {
                name: "生活旅行",
                id: "WQ1995"
                },
                {
                name: "图书音像",
                id: "WQ1996"
                },
                {
                name: "邮币",
                id: "WQ1997"
                },
                {
                name: "农资绿植",
                id: "WQ1998"
                },
                {
                name: "特产馆",
                id: "WQ1999"
                },
                {
                name: "慕淘金融",
                id: "WQ2000"
                },
                {
                name: "拍卖",
                id: "WQ2001"
                },
                {
                name: "房产",
                id: "WQ2008"
                },
                {
                name: "二手商品",
                id: "WQ2002"
                }
            ];
            },
            switchTab(id){
                //判断id 是否 相等 给它添加样式
                if(this.curId === id){
                    return
                }
                this.curId = id
                this.$emit('switch-tab',id)
            }

        }
    }
</script>

<style scoped>
/*滚动条*/
.wrapper {
  width: 100%;
  overflow: hidden;
}
.content {
  height: auto;
}
.tab{
    height: auto;
}
/* 滚动条结束 */
.tab-list{
    width: 100%;
    height: 38px;
    text-align: center;
    line-height:38px;
    background: #fff;
    font-size:14px;
    color: #000;
    border-top: 1px solid #ccc;
     border-right: 1px solid #ccc;
}
.tab-list-active {
  background: none;
 border-top: 1px solid rgba(0,0,0,0);
 border-right: 1px solid rgba(0,0,0,0);
  color: #f23030;
}
</style>