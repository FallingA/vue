<template>
    <div>
        <me-scroll class="wrapper"  
        :listenScroll="listenScroll" 
        @scroll="_scroll"  
        :style="{'height':Fheight}" ref="scroll">
            <div class="content">
                <div class="content-wrap">
                    <!-- 广告部分 -->
                    <div class="pic" v-if="content.banner">
                        <a :href="content.banner.linkUrl">
                            <img :src="`http:${content.banner.picUrl}`">
                        </a>
                    </div>
                    <!-- 广告结束 -->
                    <section v-for="(val,key) in content.data" :key="key">
                        <h3 class="s-title">{{val.name}}</h3>
                        <ul class="s-list">
                            <li v-for="(item,k) in val.itemList" :key="k">
                                <a :href="item.linkUrl" >
                                    <img :src="`http:${item.picUrl}`">
                                </a>
                                <p>{{item.name}}</p>

                            </li>

                        </ul>
                    </section>

                </div>

            </div>

        </me-scroll>
        <me-backtop :visible="isBacktopVisible" @backtop="backTop"></me-backtop>
    </div>
</template>

<script>
import MeScroll from "@/components/scroll";
//返回顶部组件
    import MeBacktop from '@/components/backtop';
    export default {
        name:'categorycontent',
        props:{
            curId:{
                type: String,
                default: ""
            }
        },
        components:{
            MeScroll,
            MeBacktop
        },
        data(){
            return{
                 Fheight:document.documentElement.clientHeight - 90 + 'px',
                 content:{},
                listenScroll:true,
                isBacktopVisible: false,
            }
        },
        watch: {
            curId(id) {
            //console.log(id);
            this.getContent(id);
            }
        },
        methods:{
            getContent(id) {
            // this.$axios.defaults.baseURL = "http://localhost:8081";
            return this.$axios
                .get(`http://www.imooc.com/api/category/content/${id}`)
                .then(res => {
                //if (res.data.code == 0) {
                console.log(res.data);
                this.content = res.data.content;
                console.log(this.content);
                //}
                })
                .catch(err => {
                console.log(err);
                });
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
.wrapper {
  width: 100%; 
  overflow: hidden;
}
.content {
  height: auto;
 
}
.content-wrap{
    width: 100%;
    padding:5px;
    
}
.pic{
    display: flex;
    justify-content: space-between;
    
}
.pic img{
    width:100%
}

    
section{
    margin-top: 10px;
    
    
}
.s-title{
    width: 100%;
    font-size: 15px;
    color: #000;
    background:rgb(238, 238, 238);
    line-height: 24px;
    height: 24px;
    margin-bottom: 3px;
}
.s-list{
    background: #fff;
    border-radius: 3px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 4px;
}
.s-list li{
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 3px;
}
.s-list li img{
    width: 100%
}
.s-list li p{
    text-overflow: ellipsis;
    white-space:nowrap;
    text-align: center;
    overflow:hidden;white-space:nowrap;
    font-size: 12px;
}

</style>