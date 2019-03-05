<template>
    <div>
        <!-- 我是分类 -->
        <navbar>
             <i class="iconfont icon-back" slot="left" @click="goBack()"></i>
            <div slot="center">分类页</div>
            <i class="iconfont icon-msg" slot="right"></i>
        </navbar>
        <div class="cate-wrap">
            <div class="sidebar">
                <tab @switch-tab="getCurrentId"></tab>
            </div>
            <div class="main">
                <cate-gorycontent :curId="curId"></cate-gorycontent>
            </div>
        </div>


    </div>
</template>

<script>
    import navbar from '@/components/navbar';
    import tab from './tab';
    import CateGorycontent from './content';
    export default {
        name:'cartgory',
        components:{
            navbar,
            tab,
            CateGorycontent
        },
        data(){
            return{
                curId:''
            }
        },
        methods:{
            goBack() {
             this.$router.go(-1);
            },
            getCurrentId(id){
                this.curId = id
            }
        }
        
    }
</script>

<style scoped>
.navbar{
    display: flex;
    justify-content: space-between;
    height: 40px;
    background: linear-gradient(#eee, #ddd);
    border-bottom: 1px solid #ddd;
    border-radius: 4px;
    align-items: center
}
.navbar .iconfont{
    font-size: 18px;
}
/*  navbar结束 */
.cate-wrap{
    display: flex;
}
.sidebar{
    height: 100%;
    width: 28%;
}
.main{
    width: 72%;
    height: 100%;
}
</style>